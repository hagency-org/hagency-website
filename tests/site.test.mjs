import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, readdir, stat, mkdir } from 'node:fs/promises';
import { join, extname, resolve, sep } from 'node:path';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const dist = resolve('dist');
const manifest = JSON.parse(await readFile('src/data/releases.json','utf8'));
const mime = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.webp':'image/webp', '.woff2':'font/woff2', '.xml':'application/xml', '.txt':'text/plain' };
let server, browser, base;
async function walk(path) {
  const entries = await readdir(path,{withFileTypes:true});
  return (await Promise.all(entries.map(entry=>entry.isDirectory()?walk(join(path,entry.name)):join(path,entry.name)))).flat();
}
const pages = (await walk(dist)).filter(file=>file.endsWith('index.html') && /[/\\](en|zh-cn)[/\\]/.test(file)).map(file=>file.slice(dist.length).replaceAll(sep,'/').replace(/index\.html$/,''));
before(async()=>{
  assert.equal(pages.length,62,'Expected 31 complete routes per language');
  server=createServer(async(req,res)=>{
    try {
      const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
      let path=resolve(dist,`.${pathname}`);
      if(path!==dist && !path.startsWith(dist+sep)){res.writeHead(403).end();return;}
      if((await stat(path)).isDirectory()) path=join(path,'index.html');
      res.writeHead(200,{'Content-Type':mime[extname(path)]??'application/octet-stream'}).end(await readFile(path));
    }catch{res.writeHead(404,{'Content-Type':'text/html'}).end(await readFile(join(dist,'404.html')));}
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch();
  await mkdir('test-results',{recursive:true});
});
after(async()=>{await browser?.close();if(server) await new Promise(resolve=>server.close(resolve));});
async function withPage(run,options={}) {
  const context=await browser.newContext({viewport:{width:1440,height:1000},colorScheme:'dark',reducedMotion:'reduce',...options});
  const page=await context.newPage();const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  try {await run(page,context);assert.deepEqual(errors,[],'No uncaught browser errors');}finally{await context.close();}
}
const go=(page,path)=>page.goto(base+path,{waitUntil:'networkidle'});

test('all localized routes render and internal links resolve',async()=>{
  await withPage(async page=>{
    const broken=[];
    for(const route of pages){
      const response=await page.goto(base+route);
      assert.equal(response.status(),200,route);
      const lang=route.startsWith('/en/')?'en':'zh-CN';
      assert.equal(await page.locator('html').getAttribute('lang'),lang,route);
      assert.equal(await page.locator('main h1').count(),1,route);
      assert.ok((await page.locator('main').innerText()).length>200,`${route} renders its page content`);
      if(lang==='zh-CN' && route!=='/zh-cn/')assert.match(await page.locator('h1').innerText(),/[\u3400-\u9fff]/,route);
      assert.ok(await page.locator('meta[name="description"]').getAttribute('content'));
      assert.equal(await page.locator('link[hreflang]').count(),3);
      const links=await page.locator('a[href],img[src],script[src],link[rel="stylesheet"]').evaluateAll(nodes=>nodes.map(node=>node.getAttribute('href')||node.getAttribute('src')));
      for(const link of links){
        const target=new URL(link,base+route);
        if(target.origin!==base)continue;
        let path=join(dist,decodeURIComponent(target.pathname));
        try{
          if((await stat(path)).isDirectory()) path=join(path,'index.html');
          await stat(path);
          if(target.hash && path.endsWith('.html')){
            const html=await readFile(path,'utf8');
            if(!html.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`))broken.push(`${route} → ${link} (missing anchor)`);
          }
        }catch{broken.push(`${route} → ${link}`);}
      }
      const other=lang==='en'?route.replace('/en/','/zh-cn/'):route.replace('/zh-cn/','/en/');
      assert.equal(await page.locator('[data-language-switch]').getAttribute('href'),other,route);
    }
    assert.deepEqual(broken,[]);
  });
});

test('language preserves route and theme persists across pages',async()=>{
  await withPage(async page=>{
    await go(page,'/zh-cn/docs/approvals/#section-2');
    await page.locator('.theme-toggle').click();
    assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
    await page.locator('[data-language-switch]').click();
    await page.waitForURL('**/en/docs/approvals/#section-2');
    assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
    assert.match(await page.locator('h1').innerText(),/approvals/);
    await page.locator('.brand').first().click();
    await page.waitForURL('**/en/');
    assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
  });
});

test('walkthrough progresses and replays without live requests',async()=>{
  for(const lang of ['en','zh-cn'])await withPage(async page=>{
    const external=[];page.on('request',request=>{if(new URL(request.url()).origin!==base)external.push(request.url());});
    await go(page,`/${lang}/demo/`);
    assert.equal(await page.locator('[data-prev]').isDisabled(),true);
    for(let index=0;index<8;index++){
      assert.equal(await page.locator('[data-panel]:visible').getAttribute('data-panel'),String(index));
      assert.equal(await page.locator('[data-step][aria-pressed="true"]').getAttribute('data-step'),String(index));
      assert.equal(await page.locator('[data-progress] span').innerText(),String(index+1));
      await page.locator('[data-next]').click();
    }
    assert.equal(await page.locator('[data-panel]:visible').getAttribute('data-panel'),'0');
    await page.locator('[data-step="5"]').click();
    assert.equal(await page.locator('[data-panel]:visible').getAttribute('data-panel'),'5');
    await page.locator('[data-prev]').click();
    assert.equal(await page.locator('[data-panel]:visible').getAttribute('data-panel'),'4');
    assert.deepEqual(external,[]);
  });
});

test('localized search finds guides and handles no matches',async()=>{
  for(const lang of ['en','zh-cn'])await withPage(async page=>{
    await go(page,`/${lang}/docs/`);
    await page.keyboard.press('Control+k');
    assert.equal(await page.locator('.search-dialog').isVisible(),true);
    await page.locator('.search-dialog input').fill(lang==='en'?'permission':'权限');
    const hrefs=await page.locator('.search-results a').evaluateAll(nodes=>nodes.map(node=>node.getAttribute('href')));
    assert.ok(hrefs.includes(`/${lang}/docs/approvals/`),JSON.stringify(hrefs));
    assert.ok(hrefs.every(href=>href.startsWith(`/${lang}/`)));
    await page.locator('.search-dialog input').fill('qzxv-no-result-978');
    assert.equal(await page.locator('.search-results a').count(),0);
    assert.match(await page.locator('.search-empty').innerText(),lang==='en'?/No results/:/没有找到/);
    await page.keyboard.press('Escape');
    await page.waitForFunction(()=>!document.querySelector('.search-dialog').open);
    assert.equal(await page.locator('.search-dialog').isVisible(),false);
    await page.locator('.inline-search').click();
    await page.locator('.search-dialog input').fill(lang==='en'?'approvals':'执行审批');
    await page.locator(`.search-results a[href="/${lang}/docs/approvals/"]`).click();
    await page.waitForURL(`**/${lang}/docs/approvals/`);
  });
});

test('download platform filter selects available assets',async()=>{
  for(const lang of ['en','zh-cn'])await withPage(async page=>{
    await go(page,`/${lang}/downloads/`);
    const expected=new Set(manifest.releases.flatMap(release=>release.assets.map(asset=>asset.url)));
    assert.equal(await page.locator('[data-download-row]:visible').count(),expected.size);
    for(const href of await page.locator('[data-download-row]>.text-link').evaluateAll(nodes=>nodes.map(node=>node.href)))assert.ok(expected.has(href),href);
    for(const platform of ['macos','linux','windows','android','ios']){
      await page.locator('[data-platform-select]').selectOption(platform);
      const count=manifest.releases.flatMap(release=>release.assets).filter(asset=>asset.platform.split(',').includes(platform)).length;
      assert.equal(await page.locator('[data-download-row]:visible').count(),count,platform);
      if(platform==='ios')assert.equal(await page.locator('[data-platform-empty]:visible').count(),manifest.releases.length);
    }
    await page.locator('[data-platform-select]').selectOption('all');
    assert.equal(await page.locator('[data-download-row]:visible').count(),expected.size);
  });
});

test('mobile navigation and layouts have no horizontal overflow',async()=>{
  const corePages=pages.filter(route=>route.split('/').filter(Boolean).length<=2 || route.includes('/projects/'));
  for(const width of [320,390,768])await withPage(async page=>{
    for(const route of corePages){
      await page.goto(base+route);await page.evaluate(()=>document.fonts.ready);
      const overflow=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,offenders:[...document.querySelectorAll('main *')].filter(el=>{const r=el.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left< -1);}).slice(0,8).map(el=>`${el.tagName}.${el.className}`)}));
      assert.ok(overflow.width<=width,`${width}px ${route}: ${JSON.stringify(overflow)}`);
    }
    for(const lang of ['en','zh-cn']){
      await go(page,`/${lang}/`);
      await page.locator('.mobile-toggle').click();
      assert.equal(await page.locator('.mobile-toggle').getAttribute('aria-expanded'),'true');
      assert.equal(await page.locator('#mobile-nav').isVisible(),true);
      await page.locator(`#mobile-nav a[href="/${lang}/projects/palpo/"]`).click();
      await page.waitForURL(`**/${lang}/projects/palpo/`);
      assert.equal(await page.locator('#mobile-nav').isVisible(),false);
    }
  },{viewport:{width,height:844},isMobile:true,hasTouch:true});
});

test('key pages meet automated accessibility checks in both themes',async()=>{
  const failures=[];
  for(const lang of ['en','zh-cn'])for(const theme of ['dark','light'])await withPage(async page=>{
    for(const slug of ['','matrix/','architecture/','docs/','demo/','downloads/']){
      await go(page,`/${lang}/${slug}`);
      const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
      failures.push(...result.violations.map(v=>({lang,theme,slug,id:v.id,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})));
    }
  },{colorScheme:theme});
  await readFile('public/fonts/OFL.txt');
  assert.deepEqual(failures,[]);
});

test('copy controls, update filters, feeds, and missing pages work',async()=>{
  await withPage(async(page,context)=>{
    await context.grantPermissions(['clipboard-read','clipboard-write']);
    await go(page,'/zh-cn/docs/deploy-palpo/');
    await page.locator('[data-copy]').click();
    assert.match(await page.evaluate(()=>navigator.clipboard.readText()),/cargo build --release/);
    await go(page,'/en/updates/');
    await page.locator('[data-filter="palpo"]').click();
    assert.equal(await page.locator('[data-filter-item]:visible').count(),1);
    assert.equal(await page.locator('[data-filter-item]:visible').getAttribute('data-filter-item'),'palpo');
    for(const lang of ['en','zh-cn']){
      const response=await page.request.get(`${base}/${lang}/rss.xml`);
      assert.equal(response.status(),200);assert.equal(((await response.text()).match(/<item>/g)||[]).length,3);
    }
    const sitemap=await page.request.get(`${base}/sitemap.xml`);assert.equal(((await sitemap.text()).match(/<loc>/g)||[]).length,62);
    const robots=await page.request.get(`${base}/robots.txt`);assert.match(await robots.text(),/Disallow: \//);
    const response=await go(page,'/missing-page/');assert.equal(response.status(),404);assert.equal(await page.locator('h1').count(),1);
  });
});

test('Matrix network comparison switches architecture without live requests',async()=>{
  for(const lang of ['en','zh-cn'])await withPage(async page=>{
    const external=[];page.on('request',request=>{if(new URL(request.url()).origin!==base)external.push(request.url());});
    await go(page,`/${lang}/`);
    await page.locator(`.matrix-intro a[href="/${lang}/matrix/"]`).click();
    await page.waitForURL(`**/${lang}/matrix/`);
    assert.equal(await page.locator('[data-network-panel]:visible').getAttribute('data-network-panel'),'federated');
    assert.equal(await page.locator('.federated-server:visible').count(),3);
    await page.locator('[data-network-mode="centralized"]').click();
    assert.equal(await page.locator('[data-network-mode="centralized"]').getAttribute('aria-pressed'),'true');
    assert.equal(await page.locator('[data-network-panel]:visible').getAttribute('data-network-panel'),'centralized');
    assert.equal(await page.locator('.central-hub:visible').count(),1);
    assert.equal(await page.locator('.federated-server:visible').count(),0);
    await page.locator('[data-network-mode="federated"]').click();
    assert.equal(await page.locator('.federated-server:visible').count(),3);
    await page.locator('.search-open').first().click();
    await page.locator('.search-dialog input').fill(lang==='en'?'federation':'联邦');
    assert.ok(await page.locator(`.search-results a[href="/${lang}/matrix/"]`).count());
    assert.deepEqual(external,[]);
  });
});

test('equal room roles update human and agent permissions together',async()=>{
  for(const lang of ['en','zh-cn'])await withPage(async page=>{
    const requests=[];page.on('request',request=>requests.push({url:request.url(),method:request.method()}));
    await go(page,`/${lang}/matrix/#agent-native`);
    const states=()=>page.locator('[data-room-member]').evaluateAll(members=>members.map(member=>[...member.querySelectorAll('[data-capability]')].map(row=>({capability:row.dataset.capability,granted:row.dataset.granted}))));
    const initial=await states();assert.equal(initial.length,2);assert.deepEqual(initial[0],initial[1]);
    assert.deepEqual(initial[0].map(item=>item.granted),['true','true','false','false']);
    await page.locator('[data-room-role]').selectOption('moderator');
    const granted=await states();assert.deepEqual(granted[0],granted[1]);assert.ok(granted[0].every(item=>item.granted==='true'));
    assert.match(await page.locator('[data-permission-status]').innerText(),lang==='en'?/Both are room moderators/:/双方均为房间管理者/);
    await page.locator('[data-room-role]').selectOption('member');assert.deepEqual(await states(),initial);
    assert.equal(requests.some(request=>request.method!=='GET'||new URL(request.url).origin!==base),false,'No authorization or other live request was issued');
    await page.locator('[data-language-switch]').click();
    const other=lang==='en'?'zh-cn':'en';await page.waitForURL(`**/${other}/matrix/#agent-native`);
  },{viewport:{width:390,height:844},isMobile:true,hasTouch:true});
});

test('project screenshots load and enlarge with localized captions and keyboard controls',async()=>{
  for(const lang of ['en','zh-cn'])for(const width of [320,1440])await withPage(async page=>{
    await go(page,`/${lang}/`);
    assert.equal(await page.locator('#projects [data-screenshot]').count(),3);
    for(const shot of await page.locator('#projects [data-screenshot]').all()){
      await shot.scrollIntoViewIfNeeded();
      await shot.locator('img').evaluate(img=>img.decode());
    }
    const first=page.locator('#projects [data-screenshot]').first();
    await first.click();
    await page.waitForFunction(()=>document.querySelector('[data-screenshot-image] img')?.naturalWidth>0);
    await page.keyboard.press('Escape');
    await page.waitForFunction(()=>!document.querySelector('[data-screenshot-dialog]').open);
    assert.equal(await first.evaluate(node=>document.activeElement===node),true);
    for(const project of ['hagency','robrix2','palpo']){
      await go(page,`/${lang}/projects/${project}/#screenshots`);
      const shots=page.locator('#screenshots [data-screenshot]');
      assert.equal(await shots.count(),2);
      if(project==='palpo')assert.match(await page.locator('#screenshots .screenshot-scope').first().innerText(),lang==='en'?/separate companion administration app/:/独立配套管理应用/);
      for(let i=0;i<2;i++){
        const shot=shots.nth(i);
        await shot.scrollIntoViewIfNeeded();
        await shot.locator('img').evaluate(img=>img.decode());
        await shot.focus();
        await page.keyboard.press('Enter');
        const dialog=page.locator('[data-screenshot-dialog]');
        await page.waitForFunction(()=>{const image=document.querySelector('[data-screenshot-image] img');return image?.complete&&image.naturalWidth>0;});
        assert.equal(await dialog.isVisible(),true);
        assert.equal(await dialog.locator('img').getAttribute('alt'),await shot.getAttribute('data-alt'));
        assert.equal(await dialog.locator('#screenshot-title').innerText(),await shot.getAttribute('data-title'));
        assert.match(await dialog.locator('[data-screenshot-metadata]').innerText(),lang==='en'?/Development integration/:/开发版集成/);
        const original=await shot.getAttribute('href');
        assert.equal(await dialog.locator('[data-screenshot-original]').getAttribute('href'),base+original);
        const dims=await dialog.locator('img').evaluate(img=>({width:img.naturalWidth,height:img.naturalHeight}));
        assert.equal(dims.width,Number(await shot.getAttribute('data-width')));
        assert.equal(dims.height,Number(await shot.getAttribute('data-height')));
        await dialog.locator('[data-screenshot-zoom]').click();
        assert.equal(await dialog.locator('[data-screenshot-zoom]').getAttribute('aria-pressed'),'true');
        const scroll=await dialog.locator('[data-screenshot-image]').evaluate(el=>({client:el.clientWidth,scroll:el.scrollWidth}));
        assert.ok(scroll.scroll>scroll.client,`${project}: actual size allows horizontal inspection`);
        const bounds=await dialog.boundingBox();assert.ok(bounds.x>=0&&bounds.x+bounds.width<=width,`${project}: dialog fits viewport`);
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
        await dialog.locator('[data-screenshot-zoom]').click();
        assert.equal(await dialog.locator('[data-screenshot-zoom]').getAttribute('aria-pressed'),'false');
        if(width===1440&&i===0){
          const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
          assert.deepEqual(result.violations,[],`${lang}/${project}: enlarged screenshot accessibility`);
        }
        if(i===0)await page.keyboard.press('Escape');else await dialog.locator('[data-screenshot-close]').click();
        await page.waitForFunction(()=>!document.querySelector('[data-screenshot-dialog]').open);
        assert.equal(await shot.evaluate(node=>document.activeElement===node),true,'Focus returns to the screenshot link');
      }
    }
  },{viewport:{width,height:900},colorScheme:width===320?'light':'dark'});
});

test('original screenshot links work without JavaScript',async()=>{
  for(const project of ['hagency','robrix2','palpo'])await withPage(async page=>{
    await go(page,`/zh-cn/projects/${project}/#screenshots`);
    const shot=page.locator('#screenshots [data-screenshot]').first();
    const path=await shot.getAttribute('href');
    await shot.click();
    await page.waitForURL(base+path);
    await page.waitForFunction(()=>document.querySelector('img')?.naturalWidth>0);
  },{javaScriptEnabled:false});
});

test('screenshot load failures show a localized recovery link',async()=>{
  for(const lang of ['en','zh-cn'])await withPage(async page=>{
    await page.route('**/images/screenshots/*.png',route=>route.abort());
    await go(page,`/${lang}/projects/hagency/`);
    const opener=page.locator('#screenshots [data-screenshot]').first();
    await opener.click();
    await page.waitForFunction(()=>document.querySelector('[data-screenshot-image] img')?.hidden);
    assert.match(await page.locator('[data-screenshot-status]').innerText(),lang==='en'?/could not load/:/截图加载失败/);
    assert.equal(await page.locator('[data-screenshot-original]').isVisible(),true);
    await page.locator('[data-screenshot-close]').click();
    assert.equal(await opener.evaluate(node=>document.activeElement===node),true);
  });
});

test('architecture diagram switches views and inspects connections in both languages',async()=>{
  const expected={overview:12,registration:8,messages:10,runtimes:8};
  for(const lang of ['en','zh-cn'])await withPage(async page=>{
    const requests=[];page.on('request',r=>requests.push({url:r.url(),method:r.method()}));
    await go(page,`/${lang}/architecture/#map`);
    await page.waitForSelector('[data-architecture-flow] .react-flow__node');
    for(const [view,count] of Object.entries(expected)){
      await page.locator(`[data-architecture-view="${view}"]`).click();
      assert.equal(await page.locator('.react-flow__node').count(),count,view);
      assert.equal(await page.locator(`[data-architecture-view="${view}"]`).getAttribute('aria-pressed'),'true');
      const chosen={overview:'palpo',registration:'bridge',messages:'devices',runtimes:'acp'}[view];
      await page.locator('[data-component-select]').selectOption(chosen);
      assert.ok((await page.locator('[data-flow-inspector]').innerText()).length>140);
      const node=page.locator(`.react-flow__node[data-id="${chosen}"]`);
      assert.equal(await page.locator('[data-flow-inspector] h3').innerText(),await node.getAttribute('aria-label'));
      // Native graph keyboard selection also changes the inspector.
      const keyboardNode=page.locator('.react-flow__node[data-id="backend"]');
      // React Flow measures freshly mounted views before making nodes visible.
      await keyboardNode.waitFor({state:'visible'});
      await keyboardNode.focus();
      assert.equal(await keyboardNode.evaluate(el=>document.activeElement===el),true);
      await page.keyboard.press('Enter');
      assert.match(await page.locator('[data-flow-inspector] h3').innerText(),lang==='en'?/control plane/:/控制平面/);
      const edgeId={overview:'poll',registration:'registration',messages:'client',runtimes:'codex'}[view];
      await page.locator(`.react-flow__edge[data-id="${edgeId}"]`).focus();
      await page.keyboard.press('Enter');
      assert.equal(await page.locator('[data-flow-inspector] .eyebrow').textContent(),lang==='en'?'Connection':'连接');
      assert.match(await page.locator('[data-flow-inspector] h3').innerText(),/→/);
      if(view==='runtimes')for(const [id,protocol] of [['terminal',/tmux runtime interface/],['codex-approval',/Native JSON-RPC approval request/],['acp',/Agent Client Protocol/]]) {
        const link=page.locator(`.react-flow__edge[data-id="${id}"]`);
        await link.focus();await page.keyboard.press('Enter');
        assert.match(await page.locator('[data-flow-inspector]').innerText(),protocol);
      }
      if(view==='overview')assert.match(await page.locator('[data-flow-inspector]').innerText(),lang==='en'?/ACK is not approval/:/ACK 不代表审批/);
    }
    assert.equal(requests.some(r=>new URL(r.url).origin!==base||r.method!=='GET'),false,'Diagram does not contact live services or issue grants');
    await page.locator('[data-language-switch]').click();
    await page.waitForURL(`**/${lang==='en'?'zh-cn':'en'}/architecture/#map`);
  });
});

test('architecture zoom reset theme and mobile controls work',async()=>{
  for(const lang of ['en','zh-cn'])for(const width of [320,1440])await withPage(async page=>{
    await go(page,`/${lang}/architecture/#map`);
    await page.waitForSelector('.react-flow__node[data-id="bridge"]');
    const viewport=page.locator('.react-flow__viewport');
    const scale=()=>viewport.evaluate(el=>Number(el.style.transform.match(/scale\(([^)]+)\)/)[1]));
    const before=await scale();
    await page.locator('[data-flow-zoom="in"]').click();assert.ok(await scale()>before);
    await page.locator('[data-flow-zoom="out"]').click();assert.ok(Math.abs(await scale()-before)<.01);
    await page.locator('[data-flow-fit]').click();
    const node=page.locator('.react-flow__node[data-id="bridge"]');
    const position=await node.evaluate(el=>el.style.transform);
    await node.scrollIntoViewIfNeeded();const box=await node.boundingBox();
    await page.mouse.move(box.x+box.width/2,box.y+box.height/2);
    await page.mouse.down();await page.mouse.move(box.x+box.width/2+25,box.y+box.height/2+20,{steps:5});await page.mouse.up();
    assert.notEqual(await node.evaluate(el=>el.style.transform),position,'A node can be dragged');
    await page.locator('[data-flow-reset]').click();
    assert.equal(await node.evaluate(el=>el.style.transform),position,'Reset restores the node positions');
    // Pan from an empty corner, away from all nodes and the minimap.
    const canvas=page.locator('.architecture-canvas');await canvas.scrollIntoViewIfNeeded();
    const bounds=await canvas.boundingBox();const oldTransform=await viewport.evaluate(el=>el.style.transform);
    await page.mouse.move(bounds.x+8,bounds.y+20);await page.mouse.down();await page.mouse.move(bounds.x+45,bounds.y+50,{steps:5});await page.mouse.up();
    assert.notEqual(await viewport.evaluate(el=>el.style.transform),oldTransform,'The map can be panned');
    await page.locator('[data-flow-fit]').click();
    await page.locator('.theme-toggle').click();
    await page.waitForFunction(()=>document.querySelector('[data-architecture-flow]').dataset.colorMode===document.documentElement.dataset.theme);
    assert.equal(await page.locator('[data-architecture-flow]').getAttribute('data-color-mode'),'light');
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'Graph navigation stays within the page');
    await page.locator('[data-component-select]').selectOption('bridge');
    assert.match(await page.locator('[data-flow-inspector]').innerText(),lang==='en'?/No inbound listener/:/不需要入站监听/);
  },{viewport:{width,height:1000}});
});

test('architecture text explains all connections without JavaScript',async()=>{
  for(const lang of ['en','zh-cn'])await withPage(async page=>{
    await go(page,`/${lang}/architecture/`);
    assert.equal(await page.locator('#registration .architecture-steps li').count(),7);
    assert.equal(await page.locator('#runtimes .architecture-runtime-card').count(),5);
    assert.equal(await page.locator('#transport tbody tr').count(),5);
    assert.equal(await page.locator('#connections details').count(),4);
    await page.locator('.architecture-example summary').click();
    const yaml=await page.locator('.architecture-example code').innerText();
    assert.match(yaml,/as_token: <APP_SERVICE_SECRET>/);assert.match(yaml,/hs_token: <HOMESERVER_SECRET>/);
    assert.match(yaml,/\/api\/relay\/v2\//);
    await page.locator('#connections details').last().locator('summary').click();
    assert.match(await page.locator('#connections details').last().innerText(),/JSON-RPC/);
    assert.match(await page.locator('#client').innerText(),/SyncService/);
    assert.match(await page.locator('#runtimes').innerText(),/coding-full/);
    assert.match(await page.locator('#runtimes').innerText(),/thread\/start/);
    assert.equal(await page.locator('.architecture-fallback').isVisible(),true);
  },{javaScriptEnabled:false});
});

test('architecture text survives a failed island request',async()=>{
  const context=await browser.newContext();const page=await context.newPage();
  try{
    let blocked=0;
    await page.route('**/ArchitectureFlow*.js',route=>{blocked++;return route.abort();});
    await go(page,'/zh-cn/architecture/');
    assert.ok(blocked>0,'The actual architecture island was blocked');
    assert.equal(await page.locator('#registration .architecture-steps li').count(),7);
    assert.equal(await page.locator('#transport tbody tr').count(),5);
    assert.equal(await page.locator('#client h2').isVisible(),true);
    assert.equal(await page.locator('.architecture-fallback').isVisible(),true);
    await page.locator('.architecture-fallback a').click();
    await page.waitForURL('**/zh-cn/architecture/#connections');
  }finally{await context.close();}
});

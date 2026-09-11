import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, extname, sep } from 'node:path';
import { chromium } from 'playwright';

const dist = resolve('dist');
const site = new URL(process.env.SITE_URL || 'https://hagency.org/');
const prefix = site.pathname;
const publicOrigin = site.origin;
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2', '.xml': 'application/xml' };
let server, browser, origin;
async function walk(directory) {
  return (await Promise.all((await readdir(directory, { withFileTypes: true })).map(entry => entry.isDirectory()
    ? walk(join(directory, entry.name)) : join(directory, entry.name)))).flat();
}
before(async () => {
  if (process.env.PUBLISHED_SITE) {
    const published = new URL(process.env.PUBLISHED_SITE);
    assert.equal(published.pathname, prefix);
    origin = published.origin;
  } else {
    server = createServer(async (req, res) => {
      try {
        const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        if (!pathname.startsWith(prefix)) { res.writeHead(404).end(); return; }
        let file = resolve(dist, pathname.slice(prefix.length));
        if (file !== dist && !file.startsWith(dist + sep)) { res.writeHead(403).end(); return; }
        if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
        res.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' }).end(await readFile(file));
      } catch { res.writeHead(404).end(); }
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    origin = `http://127.0.0.1:${server.address().port}`;
  }
  browser = await chromium.launch();
});
after(async () => { await browser?.close(); if (server) await new Promise(resolve => server.close(resolve)); });
async function withPage(run) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const page = await context.newPage(), errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (new URL(response.url()).origin === origin && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  try { await run(page); assert.deepEqual(errors, []); } finally { await context.close(); }
}
test('GitHub Pages serves localized routes and assets under its base path', async () => {
  const routes = (await walk(dist)).filter(file => /[/\\](en|zh-cn)[/\\].*index\.html$/.test(file))
    .map(file => file.slice(dist.length + 1).replaceAll(sep, '/').replace(/index\.html$/, ''));
  assert.equal(routes.length, 62);
  await withPage(async page => {
    await page.goto(origin + prefix);
    await page.waitForURL(origin + prefix + 'en/');
    for (const route of routes) {
      const response = await page.goto(origin + prefix + route);
      assert.equal(response.status(), 200, route);
      assert.equal(await page.locator('main h1').count(), 1);
      assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'), publicOrigin + prefix + route);
      assert.equal(await page.locator('meta[name=robots]').count(), 0);
      const links = await page.locator('a[href],img[src],script[src],link[rel=stylesheet]').evaluateAll(nodes => nodes.map(node => node.getAttribute('href') || node.getAttribute('src')));
      for (const link of links) {
        const target = new URL(link, page.url());
        if (target.origin !== origin) continue;
        assert.ok(target.pathname.startsWith(prefix), `${route}: ${link} escapes the site base path`);
        const file = resolve(dist, decodeURIComponent(target.pathname.slice(prefix.length)));
        assert.ok(file === dist || file.startsWith(dist + sep));
        await stat(file);
      }
    }
    for (const path of ['sitemap.xml', 'en/rss.xml', 'zh-cn/rss.xml']) {
      const content = await (await fetch(origin + prefix + path)).text();
      assert.ok(content.includes(publicOrigin + prefix));
      assert.ok(!content.includes('localhost:4328'));
    }
    const outside = prefix === '/' ? '/hagency-website/en/' : '/en/';
    if (!process.env.PUBLISHED_SITE) assert.equal((await fetch(origin + outside)).status, 404);
  });
});
test('GitHub Pages keeps locale search screenshots and architecture interactive', async () => {
  for (const lang of ['en', 'zh-cn']) await withPage(async page => {
    await page.goto(origin + prefix + lang + '/projects/hagency/');
    const other = lang === 'en' ? 'zh-cn' : 'en';
    assert.equal(await page.locator('[data-language-switch]').getAttribute('href'), prefix + other + '/projects/hagency/');
    await page.locator('[data-language-switch]').click();
    await page.waitForURL(origin + prefix + other + '/projects/hagency/');
    await page.locator('[data-screenshot]').first().click();
    await page.waitForFunction(() => document.querySelector('[data-screenshot-image] img')?.naturalWidth > 0);
    await page.locator('[data-screenshot-close]').click();
    await page.locator('.search-open').first().click();
    await page.locator('.search-dialog input').fill(other === 'en' ? 'approval' : '审批');
    const result = page.locator(`.search-results a[href="${prefix}${other}/docs/approvals/"]`);
    await result.click();
    await page.waitForURL(origin + prefix + other + '/docs/approvals/');
    await page.goto(origin + prefix + lang + '/architecture/');
    await page.locator('[data-architecture-view=runtimes]').click();
    await page.waitForFunction(() => document.querySelectorAll('.react-flow__node').length === 8);
    assert.equal(await page.locator('[data-architecture-view=runtimes]').getAttribute('aria-pressed'), 'true');
    await page.goto(origin + prefix + lang + '/media/');
    for (const link of await page.locator('a[download]').evaluateAll(nodes => nodes.map(node => node.href))) {
      assert.ok(new URL(link).pathname.startsWith(prefix));
      assert.equal((await fetch(link)).status, 200);
    }
  });
});

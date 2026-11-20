import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
const audit=JSON.parse(await readFile('docs/feature-audit-record.json','utf8'));
const releases=JSON.parse(await readFile('src/data/releases.json','utf8'));

test('internal audit keeps its bilingual records and immutable evidence',()=>{
 assert.equal(audit.rows.length,35);assert.equal(new Set(audit.rows.map(r=>r.id)).size,35);
 for(const row of audit.rows){
  for(const field of ['name','desktop','server','buzz','boundary'])for(const lang of ['en','zh-cn'])assert.ok(row[field][lang]?.trim(),`${row.id}/${field}/${lang}`);
  assert.equal(row.sources.length,3);
  for(const source of row.sources){const pin=audit.pins[source.product];assert.ok(source.url.startsWith(`https://github.com/${pin.repository}/blob/${pin.commit}/`),`${row.id}: drifting source`);assert.match(pin.commit,/^[a-f0-9]{40}$/);}
 }
});

test('Desktop availability reflects actual prerelease assets rather than old Robrix packages',()=>{
 const desktop=releases.releases.find(r=>r.id==='robrix2');
 assert.equal(desktop.tag,'v0.5.0-rc.14');assert.equal(desktop.prerelease,true);
 assert.deepEqual(desktop.assets.map(a=>[a.platform,a.arch]).sort(),[['macos','ARM64'],['windows','x86-64']]);
 for(const a of desktop.assets){assert.ok(a.url.startsWith('https://github.com/hagency-org/hagency-desktop/releases/download/'));assert.match(a.digest,/^sha256:[a-f0-9]{64}$/);}
 const server=releases.releases.find(r=>r.id==='hagency');assert.equal(server.assets.length,0);
 assert.ok(server.source.startsWith('https://github.com/hagency-org/hagency-server/'));
 assert.equal(releases.releases.find(r=>r.id==='palpo').tag,'v0.6.0');
});

test('partial reports, third-party clients and competitor strengths remain disclosed',()=>{
 const get=id=>audit.rows.find(r=>r.id===id);
 assert.equal(get('post-run').evidence,'partial');assert.match(get('post-run').desktop.en,/disabled/);
 assert.equal(get('third-party').evidence,'partial');assert.match(get('third-party').boundary.en,/not performed/);
 assert.match(get('encryption').buzz.en,/relay accepts NIP-17/i);
 assert.match(get('git').buzz.en,/NIP-34/);assert.match(get('workflows').buzz.en,/schedule/);assert.match(get('voice').buzz.en,/huddles/);
 assert.equal(get('accounts').evidence,'main-only');
});

const features=JSON.parse(await readFile('src/data/capabilities.json','utf8'));
test('public product features are separate from internal audit records',()=>{
 assert.equal(features.rows.length,34);assert.ok(!features.rows.some(r=>r.id==='testing'));
 for(const row of features.rows){assert.ok(row.category in features.groups);assert.equal('evidence' in row,false);for(const key of ['name','desktop','server','boundary'])for(const lang of ['en','zh-cn'])assert.ok(row[key][lang]);}
 assert.match(features.rows.find(r=>r.id==='third-party').boundary.en,/Hagency Desktop/);
 assert.match(features.rows.find(r=>r.id==='budget').boundary.en,/may exceed/);
 assert.equal(features.rows.find(r=>r.id==='accounts').availability,'');
});

test('public comparison excludes unconfirmed native Buzz encryption and broad marketing claims',()=>{
 const rows=features.rows.filter(r=>r.comparison);assert.equal(rows.length,9);assert.ok(!rows.some(r=>r.id==='encryption'));
 assert.doesNotMatch(JSON.stringify(rows),/NIP-17|gift.wrap|complete NIP-34|real.time co.edit/i);
 assert.match(rows.find(r=>r.id==='canvas').buzz.en,/Markdown/);assert.match(rows.find(r=>r.id==='git').buzz.en,/browsing/);
 assert.match(rows.find(r=>r.id==='voice').buzz.en,/Codex/);
});

test('published assets contain only the product capture and exclude engineering records',async()=>{
 const files=await readdir('dist/images/screenshots');assert.deepEqual(files.sort(),['desktop-agent-manager-1600.webp','desktop-agent-manager-800.webp','desktop-agent-manager.png'].sort());
 await assert.rejects(stat('dist/docs/feature-audit-record.json'),{code:'ENOENT'});
 await assert.rejects(stat('dist/docs/assets/screenshots'),{code:'ENOENT'});
});

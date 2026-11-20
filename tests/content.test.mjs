import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const audit=JSON.parse(await readFile('src/data/verification.json','utf8'));
const releases=JSON.parse(await readFile('src/data/releases.json','utf8'));

test('each capability has bilingual product boundaries and immutable evidence',()=>{
 assert.equal(audit.rows.length,35);assert.equal(new Set(audit.rows.map(r=>r.id)).size,35);
 for(const row of audit.rows){
  for(const field of ['name','desktop','server','buzz','boundary'])for(const lang of ['en','zh-cn'])assert.ok(row[field][lang]?.trim(),`${row.id}/${field}/${lang}`);
  assert.equal(row.sources.length,3);
  for(const source of row.sources){const pin=audit.pins[source.product];assert.ok(source.url.startsWith(`https://github.com/${pin.repository}/blob/${pin.commit}/`),`${row.id}: drifting source`);assert.match(pin.commit,/^[a-f0-9]{40}$/);}
 }
});

test('Desktop availability reflects actual prerelease assets rather than old Robrix packages',()=>{
 const desktop=releases.releases.find(r=>r.id==='robrix2');
 assert.equal(desktop.tag,'v0.5.0-rc.13');assert.equal(desktop.prerelease,true);
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
 assert.match(get('encryption').buzz.en,/NIP-17/);
 assert.match(get('git').buzz.en,/NIP-34/);assert.match(get('workflows').buzz.en,/schedule/);assert.match(get('voice').buzz.en,/huddles/);
 assert.equal(get('accounts').evidence,'main-only');
});

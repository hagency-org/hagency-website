import {writeFile} from 'node:fs/promises';

// Normal builds use the checked-in snapshot. Run explicitly to refresh and review.
const repositories={robrix2:'hagency-org/hagency-desktop',palpo:'palpo-im/palpo',hagency:'hagency-org/hagency-server'};
const results=await Promise.all(Object.entries(repositories).map(async([id,repo])=>{
  const response=await fetch(`https://api.github.com/repos/${repo}/releases?per_page=30`,{headers:{Accept:'application/vnd.github+json'}});
  if(!response.ok)throw new Error(`${repo}: GitHub returned ${response.status}`);
  const candidates=(await response.json()).filter(r=>!r.draft).sort((a,b)=>new Date(b.published_at)-new Date(a.published_at));
  // /releases/latest excludes Desktop prereleases. Select an actual installer release.
  const release=id==='hagency'?candidates[0]:candidates.find(r=>r.assets.some(a=>/\.(tar\.gz|zip|apk|deb|dmg|exe)$/.test(a.name)));
  if(!release)throw new Error(`${repo}: no published release snapshot found`);
  const assets=release.assets.filter(a=>/\.(tar\.gz|zip|apk|deb|dmg|exe)$/.test(a.name)).map(a=>{
    const name=a.name.toLowerCase();
    const platform=/macos|apple-darwin/.test(name)?'macos':/windows/.test(name)?'windows':/android/.test(name)?'android':/linux/.test(name)?'linux':null;
    const arch=/aarch64|arm64/.test(name)?'ARM64':/x86_64|amd64|x64/.test(name)?'x86-64':null;
    if(!platform||!arch)throw new Error(`Unrecognized installer: ${a.name}`);
    return {name:a.name,url:a.browser_download_url,size:a.size,platform,arch,signature:release.assets.find(s=>s.name===a.name+'.sig')?.browser_download_url??null,...(a.digest?{digest:a.digest}:{})};
  });
  return {id,tag:release.tag_name,publishedAt:release.published_at,prerelease:release.prerelease,source:release.html_url,assets,checksums:release.assets.find(a=>/^SHA256SUMS(?:\.txt)?$/.test(a.name))?.browser_download_url??null};
}));
await writeFile(new URL('../src/data/releases.json',import.meta.url),JSON.stringify({verifiedAt:new Date().toISOString(),releases:results},null,2)+'\n');
console.log(`Verified ${results.length} release records and ${results.reduce((n,r)=>n+r.assets.length,0)} installers. Review source-only records and version labels before committing.`);

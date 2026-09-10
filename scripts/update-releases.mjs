import { writeFile } from 'node:fs/promises';

const repositories = { hagency: 'hagency-org/hagency', robrix2: 'Project-Robius-China/robrix2', palpo: 'palpo-im/palpo' };
const results = await Promise.all(Object.entries(repositories).map(async ([id, repo]) => {
  const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' } });
  if (id === 'hagency' && response.status === 404) return null;
  if (!response.ok) throw new Error(`${repo}: GitHub returned ${response.status}`);
  const release = await response.json();
  const assets = release.assets.filter(asset => /\.(tar\.gz|zip|apk|deb|dmg|exe)$/.test(asset.name)
    && (id !== 'hagency' || asset.name.startsWith('hagency-'))).map(asset => {
    const name = asset.name.toLowerCase();
    const platform = id === 'hagency' ? 'macos,linux' : /macos|apple-darwin/.test(name) ? 'macos' : /windows/.test(name) ? 'windows' : /android/.test(name) ? 'android' : /linux/.test(name) ? 'linux' : null;
    if (!platform) throw new Error(`Unrecognized release platform: ${asset.name}`);
    return { name: asset.name, url: asset.browser_download_url, size: asset.size, platform, arch: /aarch64/.test(name) ? 'ARM64' : /x86_64/.test(name) ? 'x86-64' : 'Node.js', signature: release.assets.find(candidate => candidate.name === `${asset.name}.sig`)?.browser_download_url ?? null };
  });
  if (!assets.length && id === 'hagency') return null;
  if (!assets.length) throw new Error(`${repo}: no supported assets found`);
  return { id, tag: release.tag_name, publishedAt: release.published_at, source: release.html_url, assets, checksums: release.assets.find(asset => asset.name === 'SHA256SUMS')?.browser_download_url ?? null };
}));
const published = results.filter(Boolean);
await writeFile(new URL('../src/data/releases.json', import.meta.url), JSON.stringify({ verifiedAt: new Date().toISOString(), releases: published }, null, 2) + '\n');
console.log(`Verified ${published.length} releases and ${published.reduce((n, r) => n + r.assets.length, 0)} downloadable assets. Review content version labels before committing.`);

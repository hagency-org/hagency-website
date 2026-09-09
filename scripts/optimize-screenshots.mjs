import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import sharp from 'sharp';

const assets = JSON.parse(await readFile('src/data/screenshot-assets.json', 'utf8'));
for (const asset of assets) {
  const path = `public/images/screenshots/${asset.id}`;
  const original = await readFile(`${path}.png`);
  assert.equal(createHash('sha256').update(original).digest('hex'), asset.sha256, `${asset.id}: original differs from reviewed source`);
  // Resize/encode only. The original PNG is retained byte for byte.
  for (const width of [800, 1600]) {
    await sharp(original).resize({ width, withoutEnlargement: true }).webp({ quality: 92, effort: 6 }).toFile(`${path}-${width}.webp`);
  }
  console.log(`${asset.id}: original verified; responsive previews exported`);
}

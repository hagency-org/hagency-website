import sharp from 'sharp';
import { copyFile } from 'node:fs/promises';

for (const theme of ['dark', 'light']) {
  const input = new URL(`../public/images/hagency-hero-${theme}.png`, import.meta.url);
  const output = new URL(`../public/images/hagency-hero-${theme}.webp`, import.meta.url);
  const info = await sharp(input.pathname).webp({ quality: 88, effort: 6 }).toFile(output.pathname);
  console.log(`${theme}: ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
}
await copyFile(new URL('../public/images/hagency-hero-dark.png', import.meta.url), new URL('../public/images/hagency-social.png', import.meta.url));

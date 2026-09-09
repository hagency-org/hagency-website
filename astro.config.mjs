import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4328',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});

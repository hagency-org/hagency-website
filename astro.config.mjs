import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const site = new URL(process.env.SITE_URL || 'http://localhost:4328');
export default defineConfig({
  site: site.origin,
  base: site.pathname,
  output: 'static',
  integrations: [react()],
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});

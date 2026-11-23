// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fazseller.com',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true },
  build: { inlineStylesheets: 'auto' },
});

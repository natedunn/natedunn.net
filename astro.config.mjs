import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

export default defineConfig({
  site: import.meta.env.PUBLIC_PROD_URL,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    preact(),
  ],
});

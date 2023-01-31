import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: import.meta.env.PUBLIC_PROD_URL,
  integrations: [
    mdx(),
    tailwind(),
    preact({
      compat: true,
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});

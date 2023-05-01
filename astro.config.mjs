import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_PROD_URL,
  integrations: [
    mdx(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    preact({
      compat: true,
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    solidJs(),
  ],
});

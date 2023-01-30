import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import image from '@astrojs/image';

export default defineConfig({
  site: import.meta.env.PUBLIC_PROD_URL,
  integrations: [
    tailwind(),
    preact(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});

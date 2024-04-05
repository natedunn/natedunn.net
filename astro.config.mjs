import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: import.meta.env.PUBLIC_PROD_URL,
  integrations: [
    mdx(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    solidJs(),
  ],
  image: {
    service: squooshImageService(),
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  prefetch: true,
});

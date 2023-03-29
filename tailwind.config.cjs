const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-active': 'var(--color-primary-active)',
        accent: 'var(--color-accent)',
        'accent-active': 'var(--color-accent-active)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('factive', ['&:active', '&:focus']);
      addVariant('all', ['&:active', '&:focus', '&:hover']);
      addVariant('overlay', ['body.overlay &']);
    }),
  ],
};

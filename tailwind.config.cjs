const plugin = require('tailwindcss/plugin');
const defaultConfig = require('tailwindcss/defaultConfig');

const customPlugin = plugin(function ({ addVariant }) {
  addVariant('hocus', ['&:hover', '&:focus']);
  addVariant('factive', ['&:active', '&:focus']);
  addVariant('all', ['&:active', '&:focus', '&:hover']);
  addVariant('overlay', ['body.overlay &']);
});

const maxWidth = '65rem';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: maxWidth,
        md: maxWidth,
        lg: maxWidth,
        xl: maxWidth,
      },
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-active': 'var(--color-primary-active)',
        'primary-contrast': 'var(--color-text-primary-contrast)',
        accent: 'var(--color-accent)',
        'accent-active': 'var(--color-accent-active)',
        bronze: {
          50: 'color(display-p3 0.98 0.965 0.941 / <alpha-value>)',
          100: 'color(display-p3 0.961 0.929 0.882 / <alpha-value>)',
          200: 'color(display-p3 0.914 0.851 0.745 / <alpha-value>)',
          300: 'color(display-p3 0.871 0.784 0.627 / <alpha-value>)',
          400: 'color(display-p3 0.827 0.706 0.494 / <alpha-value>)',
          500: 'color(display-p3 0.784 0.635 0.373 / <alpha-value>)',
          600: 'color(display-p3 0.733 0.553 0.251 / <alpha-value>)',
          700: 'color(display-p3 0.553 0.42 0.188 / <alpha-value>)',
          800: 'color(display-p3 0.373 0.282 0.129 / <alpha-value>)',
          900: 'color(display-p3 0.18 0.137 0.063 / <alpha-value>)',
          950: 'color(display-p3 0.09 0.067 0.031 / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Outfit', ...defaultConfig.theme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), customPlugin],
};

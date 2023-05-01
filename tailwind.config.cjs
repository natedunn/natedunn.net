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
        bronze: {
          50: '251 246 239',
          100: '245 235 219',
          200: '236 217 187',
          300: '226 197 151',
          400: '217 180 119',
          500: '207 160 83',
          600: '183 133 51',
          700: '136 98 38',
          800: '92 66 26',
          900: '44 32 12',
          950: '24 17 7',
        },
        royal: {
          50: '235 243 254',
          100: '216 230 253',
          200: '177 206 251',
          300: '138 181 250',
          400: '99 156 248',
          500: '59 130 246',
          600: '11 96 234',
          700: '8 72 176',
          800: '5 48 117',
          900: '3 24 59',
          950: '1 12 29',
        },
        primary: {
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          100: 'rgb(var(--primary-100) / <alpha-value>)',
          200: 'rgb(var(--primary-200) / <alpha-value>)',
          300: 'rgb(var(--primary-300) / <alpha-value>)',
          400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
          800: 'rgb(var(--primary-800) / <alpha-value>)',
          900: 'rgb(var(--primary-900) / <alpha-value>)',
          950: 'rgb(var(--primary-950) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Outfit', ...defaultConfig.theme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), customPlugin],
};

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
        rgbZinc: {
          50: '250 250 250',
          100: '244 244 245',
          200: '228 228 231',
          300: '212 212 216',
          400: '161 161 170',
          500: '113 113 122',
          600: '113 113 122',
          700: '63 63 70',
          800: '39 39 42',
          900: '24 24 27',
          950: '9 9 11',
        },
        rgbSlate: {
          50: '229 231 235',
          100: '209 213 219',
          200: '156 163 175',
          300: '107 114 128',
          400: '74 85 104',
          500: '42 50 71',
          600: '26 32 44',
          700: '17 24 39',
          800: '12 17 26',
          900: '6, 11 22',
          950: '2, 7 14',
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
        secondary: {
          50: 'rgb(var(--secondary-50) / <alpha-value>)',
          100: 'rgb(var(--secondary-100) / <alpha-value>)',
          200: 'rgb(var(--secondary-200) / <alpha-value>)',
          300: 'rgb(var(--secondary-300) / <alpha-value>)',
          400: 'rgb(var(--secondary-400) / <alpha-value>)',
          500: 'rgb(var(--secondary-500) / <alpha-value>)',
          600: 'rgb(var(--secondary-600) / <alpha-value>)',
          700: 'rgb(var(--secondary-700) / <alpha-value>)',
          800: 'rgb(var(--secondary-800) / <alpha-value>)',
          900: 'rgb(var(--secondary-900) / <alpha-value>)',
          950: 'rgb(var(--secondary-950) / <alpha-value>)',
        },
        drop: {
          50: 'rgb(var(--drop-50) / <alpha-value>)',
          100: 'rgb(var(--drop-100) / <alpha-value>)',
          200: 'rgb(var(--drop-200) / <alpha-value>)',
          300: 'rgb(var(--drop-300) / <alpha-value>)',
          400: 'rgb(var(--drop-400) / <alpha-value>)',
          500: 'rgb(var(--drop-500) / <alpha-value>)',
          600: 'rgb(var(--drop-600) / <alpha-value>)',
          700: 'rgb(var(--drop-700) / <alpha-value>)',
          800: 'rgb(var(--drop-800) / <alpha-value>)',
          900: 'rgb(var(--drop-900) / <alpha-value>)',
          950: 'rgb(var(--drop-950) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Outfit', ...defaultConfig.theme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), customPlugin],
};

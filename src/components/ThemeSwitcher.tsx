/** @jsxImportSource solid-js */

import { createEffect, createSignal } from 'solid-js';

export function ThemeSwitcher() {
  const [theme, setTheme] = createSignal(localStorage.getItem('theme') ?? 'default');

  // NOTE: this will change to a less crude method after we add more than two themes
  const handleClick = () => {
    setTheme(theme() === 'default' ? 'royal' : 'default');
  };

  createEffect(() => {
    document.documentElement.setAttribute('data-theme', theme());
    window.localStorage.setItem('theme', theme());
  }, [theme]);

  return (
    <button class='button aspect-square' onClick={handleClick}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.5 16C9.5 16.2761 9.27614 16.5 9 16.5C8.72386 16.5 8.5 16.2761 8.5 16C8.5 15.7239 8.72386 15.5 9 15.5C9.27614 15.5 9.5 15.7239 9.5 16Z'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path
          d='M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H11.25C12.3546 4.75 13.25 5.64543 13.25 6.75V17.25C13.25 18.3546 12.3546 19.25 11.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z'
          stroke='currentColor'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path
          d='M15.7499 15.25L18.68 12.2582C19.4306 11.4917 19.4428 10.2697 18.7077 9.48834L15.6278 6.21458C14.8729 5.41215 13.1902 5.79959 13.1902 5.79959'
          stroke='currentColor'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
      </svg>
      <span class='sr-only'>Toggle theme</span>
    </button>
  );
}

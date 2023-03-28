/** @jsxImportSource solid-js */

import { createSignal } from 'solid-js';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';

// const currentPath = new URL(Astro.request.url).pathname.slice(1);

const currentPath = import.meta.url;

const navItems = [
  {
    text: 'About',
    href: '/',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Uses',
    href: '/uses',
  },
  {
    text: 'Posts',
    href: '/posts',
  },
  {
    text: 'Connect',
    href: '/connect',
  },
];

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  return (
    <nav>
      <div class='w-full flex items-center justify-evenly space-x-3 md:space-x-4 border-b border-zinc-200 dark:border-zinc-700 pb-8'>
        <div class='flex'>
          <a href='/' class='focus:outline-none'>
            <svg
              class='w-[30px] sm:w-[40px] md:w-[50px] text-primary'
              viewBox='0 0 208 136'
              fill='transparent'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M1.37879 23.617C2.37142 10.7283 12.3429 1.96589 25.2564 1.37547C40.3927 0.683414 65.0983 0 103.644 0C142.373 0 167.13 0.689946 182.247 1.38537C195.044 1.97406 205.114 10.5673 206.301 23.3225C207.233 33.3373 208 47.7344 208 68C208 88.3339 207.228 102.76 206.292 112.779C205.105 125.48 195.098 134.035 182.355 134.622C167.307 135.315 142.583 136 103.644 136C64.8905 136 40.2169 135.321 25.1492 134.632C12.2895 134.043 2.37977 125.322 1.38688 112.488C0.619549 102.569 0 88.2804 0 68C0 47.7908 0.6152 33.5319 1.37879 23.617ZM110.521 39.2039H125.701V49.3596H126.77C127.269 45.7249 128.837 42.9454 131.474 41.0212C134.111 39.097 137.567 38.1348 141.843 38.1348C147.901 38.1348 152.64 40.0947 156.061 44.0144C159.482 47.8629 161.193 53.208 161.193 60.0498V98H145.157V61.6533C145.157 58.66 144.302 56.3082 142.592 54.5978C140.952 52.8873 138.708 52.0321 135.857 52.0321C133.006 52.0321 130.726 52.8873 129.015 54.5978C127.376 56.3082 126.556 58.66 126.556 61.6533V98H110.521V39.2039ZM90.7271 82.6726H39.4141V97.6388H90.7271V82.6726Z'
                fill='currentColor'
              ></path>
            </svg>
          </a>
        </div>
        <div>
          <button>Toggle</button>
        </div>
        <ul class='flex items-center justify-start'>
          {navItems.map((item) => (
            <a
              class={clsx(
                'px-2 sm:px-3 md:px-4 py-1 text-sm sm:text-base md:text-lg opacity-80 hocus:opacity-100 link',
                `/${currentPath}` === item.href
                  ? 'underline select-none pointer-events-none text-black dark:text-white !opacity-100'
                  : ''
              )}
              href={item.href}
            >
              {item.text}
            </a>
          ))}
        </ul>
        <div class='flex justify-end grow basis-0'>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

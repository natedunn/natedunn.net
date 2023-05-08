/** @jsxImportSource solid-js */
import { Transition } from 'solid-transition-group';
import { clsx } from 'clsx';
import { Show, children, createSignal, onCleanup, untrack } from 'solid-js';
import { Portal } from 'solid-js/web';

const navItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Uses',
    href: '/uses',
  },
  // {
  //   text: 'Posts',
  //   href: '/posts',
  // },
  {
    text: 'Connect',
    href: '/connect',
  },
];

export function MainNav({ currentPath }: { currentPath: string }) {
  const [open, isOpen] = createSignal(false);
  const toggle = () => isOpen(!open());

  const overlay = () => (
    <Transition
      enterActiveClass='transition-all duration-300 ease-in-out'
      enterClass='opacity-0'
      enterToClass='opacity-100'
      exitActiveClass='transition-all duration-1000ms ease-in-out'
      exitClass='opacity-100'
      exitToClass='opacity-0'
    >
      <Show when={open()}>
        <div
          class='absolute inset-0 bg-drop-900 opacity-50 z-10 cursor-pointer'
          onClick={() => {
            isOpen(false);
          }}
        ></div>
      </Show>
    </Transition>
  );

  return (
    <nav class={clsx('relative')}>
      <Show when={open()}>
        <Portal>{overlay()}</Portal>
      </Show>

      <div>
        <button class='button aspect-square' onClick={toggle}>
          <svg class='w-6 h-6' fill='none' viewBox='0 0 24 24'>
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1.5'
              d='M4.75 5.75H19.25'
            />
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1.5'
              d='M4.75 18.25H19.25'
            />
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1.5'
              d='M4.75 12H19.25'
            />
          </svg>
        </button>
      </div>
      <Transition
        enterActiveClass='transition duration-300 origin-top-right'
        enterClass='opacity-0 scale-95'
        enterToClass='opacity-100 scale-100'
        exitActiveClass='transition duration-300 origin-top-right'
        exitClass='opacity-100 scale-100'
        exitToClass='opacity-0 scale-95'
      >
        <Show when={open()}>
          <div class='flex flex-col gap-2 absolute z-30 top-0 right-0 p-8 bg-drop-950 rounded-2xl shadow-xl'>
            {navItems.map((item) => (
              <a
                class={clsx(
                  'text-2xl pr-12 opacity-70 hocus:opacity-100 link text-white',
                  `/${currentPath}` === item.href
                    ? 'underline select-none pointer-events-none text-black dark:text-white !opacity-100'
                    : ''
                )}
                href={item.href}
              >
                {item.text}
              </a>
            ))}
          </div>
        </Show>
      </Transition>
    </nav>
  );
}

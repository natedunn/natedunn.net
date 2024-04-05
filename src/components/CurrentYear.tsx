import { createSignal } from 'solid-js';

export const CurrentYear = () => {
  const currentYear = createSignal(new Date().getFullYear());
  return currentYear;
};

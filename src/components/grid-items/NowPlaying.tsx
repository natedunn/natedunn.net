import type { Track } from '@types';
import { createEffect, createSignal } from 'solid-js';

const getCurrentTrack = async () => {
  const key = import.meta.env.PUBLIC_LASTFM_API_KEY;

  return await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=natedunn_&api_key=${key}&format=json&limit=1`
  )
    .then((res) => res.json())
    .then(async (res) => {
      const track = res?.recenttracks?.track[0] as Track;

      return {
        name: track?.name ?? 'Unknown',
        artist: track?.artist?.['#text'] ?? 'Unknown',
        artwork: track?.image?.[3]?.['#text'] ?? null,
        album: track?.album?.['#text'] ?? null,
      };
    });
};

export const NowPlaying = () => {
  const [track, setTrack] = createSignal<{
    name: string;
    artist: string;
    artwork: string | null;
    album: string | null;
  }>({
    name: 'Loading...',
    artist: 'Loading...',
    artwork: null,
    album: null,
  });

  createEffect(async () => {
    const track = await getCurrentTrack();
    setTrack(track);
  });

  return (
    <div class='box overflow-hidden relative flex flex-col h-full w-full'>
      <div class='flex items-center gap-6 h-full'>
        <div class='h-[150px] aspect-square rounded-xl bg-drop-200 dark:bg-drop-900'>
          {track().artwork ? (
            <img
              src={track().artwork ?? ''}
              alt={track().album ?? 'Album art'}
              class='rounded-xl h-[300] w-[300]'
            />
          ) : null}
        </div>
        <div class='w-full'>
          <div class='text-xs uppercase tracking-wide font-bold dark:text-drop-500 text-drop-400'>
            Now listening
          </div>
          <span class='inline-block font-bold text-primary-500 text-xl mt-1'>{track().name}</span>
          <span class='inline-block w-full text-sm'>By {track().artist}</span>
        </div>
      </div>

      <svg
        class='absolute -right-4 -bottom-8 h-32 w-32 opacity-20 text-primary-500'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          cx='7'
          cy='17'
          r='2.25'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='1.5'
        ></circle>
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='1.5'
          d='M9.25 17V6.75C9.25 5.64543 10.1454 4.75 11.25 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14'
        ></path>
        <circle
          cx='17'
          cy='14'
          r='2.25'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='1.5'
        ></circle>
      </svg>
    </div>
  );
};

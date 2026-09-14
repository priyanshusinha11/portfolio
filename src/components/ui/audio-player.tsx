"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Track = {
  title: string;
  artist: string;
  url: string;
};

// Titles and artists are kept here but deliberately not rendered. They exist so
// the source says what is playing, and so adding a second track later is a data
// change rather than a rewrite.
export const PLAYLIST: Track[] = [
  {
    title: "july",
    artist: "iloveflowers!",
    url: "/audio/theme.mp3",
  },
];

const VOLUME = 0.35;

export function AudioPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const started = useRef(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const track = PLAYLIST[index];
  const single = PLAYLIST.length === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.volume = VOLUME;
  }, []);

  // Try immediately. Browsers block audible autoplay outside a user gesture, so
  // this succeeds only where the visitor already has media engagement on the
  // domain. Everywhere else it rejects and the listener below takes over.
  useEffect(() => {
    ref.current?.play().then(
      () => {
        started.current = true;
      },
      () => {},
    );
  }, []);

  // Any click, key or tap counts as the gesture, so playback starts without the
  // visitor having to find the button.
  useEffect(() => {
    const events = ["click", "keydown", "touchstart"] as const;

    const start = () => {
      if (started.current) return;
      started.current = true;
      stop();
      ref.current?.play().catch(() => {});
    };

    const stop = () => {
      events.forEach((e) => window.removeEventListener(e, start));
    };

    events.forEach((e) => window.addEventListener(e, start));
    return stop;
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % PLAYLIST.length);
  }, []);

  // With one track the element loops itself. With more, ended advances the queue
  // and the effect below resumes playback on the new source.
  useEffect(() => {
    if (single || !playing) return;
    ref.current?.play().catch(() => {});
  }, [index, single, playing]);

  async function toggle() {
    // Claim the gesture so the window listener cannot restart a deliberate pause.
    started.current = true;
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      try {
        await el.play();
      } catch {
        setPlaying(false);
      }
    } else {
      el.pause();
    }
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-20 sm:right-auto sm:bottom-6 sm:left-6 sm:w-[19rem]">
      <audio
        ref={ref}
        src={track.url}
        loop={single}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={single ? undefined : next}
      />

      <div className="glass flex items-center gap-4 rounded-xl p-3.5">
        <span aria-hidden data-playing={playing || undefined} className="eq shrink-0 text-ink">
          <span className="eq-bar" />
          <span className="eq-bar" />
          <span className="eq-bar" />
        </span>

        <div className="min-w-0 flex-1 leading-tight">
          <p className="truncate text-[0.8125rem] text-ink" title={track.title}>
            {track.title}
          </p>
          <p className="truncate text-[0.6875rem] uppercase tracking-wide text-muted">
            {track.artist}
          </p>
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-pressed={playing}
          aria-label={playing ? "Pause background music" : "Play background music"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pen"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
            {playing ? (
              <path d="M8 5h3v14H8zm5 0h3v14h-3z" />
            ) : (
              <path d="M8 5.14v13.72a.5.5 0 0 0 .77.42l10.2-6.86a.5.5 0 0 0 0-.84L8.77 4.72a.5.5 0 0 0-.77.42z" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}

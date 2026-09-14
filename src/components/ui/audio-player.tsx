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
    <div className="fixed bottom-6 left-6 z-20">
      <audio
        ref={ref}
        src={track.url}
        loop={single}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={single ? undefined : next}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause background music" : "Play background music"}
        className="group flex h-9 items-center gap-2.5 rounded-full border border-rule px-3.5 text-muted transition-colors hover:border-pen hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pen"
      >
        <span aria-hidden className="flex h-3.5 w-3 items-end gap-[2px]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              data-playing={playing || undefined}
              className="eq-bar w-[2px] bg-current"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </span>
        <span className="text-[0.6875rem] tracking-wide">
          {playing ? "Pause" : "Play"}
        </span>
      </button>
    </div>
  );
}

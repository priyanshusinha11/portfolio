"use client";

import { useEffect, useRef, useState } from "react";

const TRACK = "/audio/theme.mp3";
const VOLUME = 0.35;

export function AudioPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  // starts on the first interaction anywhere on the page, once. browsers only
  // allow play() inside a user gesture, and a click on any element counts, so
  // the music begins without the visitor having to find this button.
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.volume = VOLUME;
  }, []);

  // try straight away. browsers block audible autoplay without a gesture, so this
  // succeeds only where the visitor has enough media engagement on the domain
  // (mainly returning Chrome users). everywhere else it rejects and the listener
  // below takes over on the first interaction.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.play().then(
      () => {
        started.current = true;
      },
      () => {},
    );
  }, []);

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

  async function toggle() {
    // claim the gesture so the window listener does not re-start a deliberate pause
    started.current = true;
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      try {
        await el.play();
        setPlaying(true);
      } catch {
        // browsers reject play() outside a user gesture, and some block it
        // entirely until the page has been interacted with. stay paused.
        setPlaying(false);
      }
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-20">
      <audio
        ref={ref}
        src={TRACK}
        loop
        preload="metadata"
        onCanPlay={() => setReady(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setReady(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause background music" : "Play background music"}
        title={ready ? undefined : "No track loaded"}
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

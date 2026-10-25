"use client";

import { useEffect, useState } from "react";

const PLAY_MS = 5200;
const REST_MS = 3000;
const GREETING_MS = 8000;

export default function MushroomIcon() {
  const [playing, setPlaying] = useState(true);
  const [token, setToken] = useState(0);
  const [greeting, setGreeting] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const delay = playing ? PLAY_MS : REST_MS;
    const id = window.setTimeout(() => {
      if (!playing) setToken((n) => n + 1);
      setPlaying((on) => !on);
    }, delay);

    return () => window.clearTimeout(id);
  }, [playing]);

  useEffect(() => {
    const id = window.setTimeout(() => setGreeting(false), GREETING_MS);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-40 sm:bottom-5 sm:right-5">
      <p
        role="status"
        aria-hidden={greeting ? undefined : true}
        className={`absolute bottom-2 right-full mr-2 w-max max-w-[min(15rem,calc(100vw-6.5rem))] rounded-2xl bg-cream px-3 py-2 text-[13px] font-medium leading-snug text-forest shadow-[0_10px_28px_rgb(6_75_40/0.16)] transition-opacity duration-700 sm:max-w-xs sm:text-sm ${
          greeting ? "opacity-100" : "opacity-0"
        }`}
      >
        Chào mừng bạn đã đến với từ điển dinh dưỡng RASA
        <span className="absolute -right-1 bottom-3 h-3 w-3 rotate-45 bg-cream" />
      </p>
      <img
        key={playing ? token : "still"}
        src={playing ? "/mushroom.gif" : "/mushroom.png"}
        alt=""
        className="h-16 w-auto select-none sm:h-20 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_78%)]"
      />
    </div>
  );
}

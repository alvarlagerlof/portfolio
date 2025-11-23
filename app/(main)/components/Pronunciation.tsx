"use client";

import { Speaker } from "components/Icons/Speaker";
import { useRef, useState, useTransition } from "react";

export function Pronunciation() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasClicked, setHasClicked] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (!hasClicked) {
    return (
      <button
        onClick={() => {
          startTransition(() => {
            setHasClicked(true);
          });
        }}
        className={`flex flex-row space-x-1 items-center mb-8 ${isPending ? "opacity-70" : ""}`}
      >
        <span className="md:text-xl font-bold text-primary mr-2">Hear the pronunciation</span>
        <Speaker />
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => {
          if (audioRef.current && audioRef.current.readyState === 4) {
            audioRef.current.play();
          }
        }}
        className="flex flex-row space-x-1 items-center mb-8"
      >
        <span className="md:text-xl font-bold text-primary mr-2">Hear the pronunciation</span>
        <Speaker />
      </button>
      <audio ref={audioRef} aria-hidden preload="none" autoPlay>
        <source src="/name.mp3" type="audio/flac" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

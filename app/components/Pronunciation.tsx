"use client";

import { Speaker } from "components/Icons/Speaker";
import { useRef } from "react";

export default function Pronunciation() {
  const audioRef = useRef(null);

  const play = () => {
    audioRef.current.volume = 0.2;
    audioRef.current.play();
  };

  return (
    <>
      <button onClick={play} className="flex flex-row space-x-1 items-center mb-8">
        <span className="md:text-xl font-bold text-primary mr-2">Hear the pronunciation</span>
        <Speaker />
      </button>

      <audio ref={audioRef} aria-hidden>
        <source src="/name.mp3" type="audio/flac" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

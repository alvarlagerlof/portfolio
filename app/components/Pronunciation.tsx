"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Pronunciation() {
  const audioRef = useRef(null);

  const play = () => {
    audioRef.current.volume = 0.2;
    audioRef.current.play();
  };

  return (
    <>
      <button className="flex flex-row space-x-2 items-center mb-8" onClick={play}>
        <span className="md:text-xl font-bold text-primary mr-2">Hear the pronunciation</span>
        <Image alt="Speaker" src="/icons/speaker.svg" width={24} height={24} />
      </button>

      <audio ref={audioRef} aria-hidden>
        <source src="/name.flac" type="audio/flac" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

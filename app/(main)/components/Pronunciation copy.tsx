"use client";

import { Speaker } from "components/Icons/Speaker";
import { cache, forwardRef, Ref, Suspense, use, useEffect, useRef, useState } from "react";

// function suspensify(promise) {
//   let status = "pending";
//   let result;
//   let suspender = promise.then(
//     r => {
//       status = "success";
//       result = r;
//     },
//     e => {
//       status = "error";
//       result = e;
//     }
//   );
//   return {
//     read() {
//       if (status === "pending") {
//         throw suspender;
//       } else if (status === "error") {
//         throw result;
//       } else if (status === "success") {
//         return result;
//       }
//     },
//   };
// }

export default function Pronunciation() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [hasClicked, setHasClicked] = useState(false);

  return (
    <Suspense fallback={<p>Loading</p>}>
      <button
        onClick={() => {
          setHasClicked(true);
          if (audioRef.current && audioRef.current.readyState === 4) {
            audioRef.current.play();
          }
        }}
        className="flex flex-row space-x-1 items-center mb-8"
      >
        <span className="md:text-xl font-bold text-primary mr-2">Hear the pronunciation</span>
        <Speaker />
      </button>

      {hasClicked ? <Test ref={audioRef} /> : <>Not clicked</>}
    </Suspense>
  );
}

const Test = forwardRef<HTMLAudioElement, {}>(function Test(props, ref) {
  const firstRender = useRef(true);

  return (
    <audio ref={ref} aria-hidden preload="none" autoPlay>
      <source src="/name.mp3" type="audio/flac" />
      Your browser does not support the audio element.
      {!firstRender.current
        ? use(
            new Promise((resolve, reject) => {
              console.log(ref.current);

              ref.current.addEventListener("canplay", () => {
                resolve(true);
              });
              ref.current.addEventListener("error", () => {
                reject(false);
              });
            })
          )
        : (firstRender.current = false)}
    </audio>
  );
});

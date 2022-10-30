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

async function testJson() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  await new Promise(r => setTimeout(r, 2000));
  return await res.json();
}

function TestJson() {
  const json = use(testJson());

  return <pre>{JSON.stringify(json, null, 2)}</pre>;
}

export default function Pronunciation() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [hasClicked, setHasClicked] = useState(false);

  if (!hasClicked) {
    return (
      <button
        onClick={() => {
          console.log("click firs time");
          setHasClicked(true);
        }}
        className="flex flex-row space-x-1 items-center mb-8"
      >
        <span className="md:text-xl font-bold text-primary mr-2">Hear the pronunciation</span>
        <Speaker />
      </button>
    );
  }

  return (
    <Suspense fallback={<p>Loading</p>}>
      <button
        onClick={() => {
          console.log("click second");
          if (audioRef.current && audioRef.current.readyState === 4) {
            audioRef.current.play();
          }
        }}
        className="flex flex-row space-x-1 items-center mb-8"
      >
        <span className="md:text-xl font-bold text-primary mr-2">Hear the pronunciation</span>
        <Speaker />
      </button>
      <Suspense fallback={<p>Loading</p>}>
        <Test ref={audioRef} />
      </Suspense>
    </Suspense>
  );
}

const Test = forwardRef<HTMLAudioElement, {}>(function Test(props, ref) {
  const firstRender = useRef(true);
  const audioRef = useRef(null);

  async function wait() {
    console.log(audioRef.current);

    firstRender.current = false;
    return Promise.resolve(undefined);
  }

  return (
    <audio ref={audioRef} aria-hidden preload="none" autoPlay>
      <source src="/name.mp3" type="audio/flac" />
      Your browser does not support the audio element.
      {use(wait())}
      {/* {firstRender.current
        ? use(wait())
        : // ? use(
          //     new Promise((resolve, reject) => {
          //       ref.current.addEventListener("canplay", async () => {
          //         await new Promise(r => setTimeout(r, 2000));

          //         console.log("resolving true");
          //         resolve(true);
          //       });
          //       ref.current.addEventListener("error", () => {
          //         reject(false);
          //       });
          //     })
          //   )
          (firstRender.current = false)} */}
    </audio>
  );
});

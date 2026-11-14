"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

export function FlipRedirectCard({
  front,
  back,
}: {
  front: {
    image: StaticImageData;
    title: string;
  };
  back: {
    message: string;
    redirectUrl: string;
  };
}) {
  const DURATION_BEFORE_REDIRECT = 1500;
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (flipped) {
      const timer = setTimeout(() => {
        window.location.href = back.redirectUrl;
      }, DURATION_BEFORE_REDIRECT);

      return () => clearTimeout(timer);
    }
  }, [flipped, back.redirectUrl]);

  return (
    <div
      className="w-[220px] h-[180px] [perspective:1000px] cursor-pointer select-none"
      onClick={() => {
        if (!flipped) {
          setFlipped(true);
        }
      }}
    >
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-red-800 p-2 rounded-xl flex flex-col gap-2 items-center justify-center shadow-lg">
          <p className="text-white font-medium text-center">{front.title}</p>
          <Image
            src={front.image}
            width={200}
            height={200}
            className="object-cover rounded-md"
            alt={front.title || "Card image"}
          />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-red-900 p-4 rounded-xl flex flex-col items-center justify-center text-white text-center shadow-lg">
          <p className="text-2xl font-medium">{back.message}</p>
        </div>
      </div>
    </div>
  );
}

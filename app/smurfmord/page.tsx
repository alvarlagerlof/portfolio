import { Metadata } from "next";

import basilisk from "./images/basilisk.jpg";
import blomsmufren from "./images/blomsmufren.jpg";
import fiolsmurfen from "./images/fiolsmurfen.jpg";
import kokettsmurfen from "./images/kokettsmurfen.jpg";
import pasksmurfen from "./images/pasksmurfen.jpg";
import blackfisk from "./images/blackfisk.jpg";
import butternalle from "./images/butternalle.jpg";
import häst from "./images/hast.jpg";
import ozelot from "./images/ozelot.jpg";
import { FlipRedirectCard } from "./FlipRedirectCard";

export const metadata: Metadata = {
  title: "Smurfmord",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GåtaPage() {
  return (
    <main className="flex flex-col items-center p-8 md:p-20 bg-green-950 min-h-screen gap-12 md:gap-16">
      <h1 className="text-white text-2xl font-medium text-center">
        Vem ville förstelna Kokettsmurfen?
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <li>
          <FlipRedirectCard
            front={{ title: "Basilisk", image: basilisk }}
            back={{ message: "Fel!", redirectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
          />
        </li>
        <li>
          <FlipRedirectCard
            front={{ title: "Blomsmufren", image: blomsmufren }}
            back={{ message: "Fel!", redirectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
          />
        </li>
        <li>
          <FlipRedirectCard
            front={{ title: "Fiolsmurfen", image: fiolsmurfen }}
            back={{ message: "Fel!", redirectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
          />
        </li>
        <li>
          <FlipRedirectCard
            front={{ title: "Kokettsmurfen", image: kokettsmurfen }}
            back={{
              message: "Rätt!",
              redirectUrl: "https://youtu.be/O2yPnnDfqpw?is=RQcTCWu_hZ1bCpw9",
            }}
          />
        </li>
        <li>
          <FlipRedirectCard
            front={{ title: "Påsksmurfen", image: pasksmurfen }}
            back={{ message: "Fel!", redirectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
          />
        </li>
        <li>
          <FlipRedirectCard
            front={{ title: "Bläckfisk", image: blackfisk }}
            back={{ message: "Fel!", redirectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
          />
        </li>
        <li>
          <FlipRedirectCard
            front={{ title: "Butternalle", image: butternalle }}
            back={{ message: "Fel!", redirectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
          />
        </li>
        <li>
          <FlipRedirectCard
            front={{ title: "Häst", image: häst }}
            back={{ message: "Fel!", redirectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
          />
        </li>
        <li>
          <FlipRedirectCard
            front={{ title: "Ozelot", image: ozelot }}
            back={{ message: "Fel!", redirectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
          />
        </li>
      </ul>
    </main>
  );
}

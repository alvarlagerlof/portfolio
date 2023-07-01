import { WithDividers } from "components/WithDividers";
import Image from "next/image";

import { ExperienceSection } from "./components/ExperienceSection";
import { SocialLinks } from "./components/SocialLinks";
import profile from "./profile.png";

export const revalidate = 600;

export const metadata = {
  title: "About me",
  description: "My story starts with a $2 computer from a flea market",
};

export default function AboutPage() {
  return (
    <WithDividers direction="vertical">
      <Header />
      <WithDividers direction="horizontal">
        <Story />
        {/* @ts-ignore */}
        <SocialLinks />
      </WithDividers>
      {/* @ts-ignore */}
      <ExperienceSection />
    </WithDividers>
  );
}

function Header() {
  return (
    <header className="flex flex-col-reverse md:flex-row md:items-center justify-between">
      <div className="mt-8 md:mr-12 md:mt-0">
        <h1 className="font-heading text-4xl md:text-7xl mb-4">Hej</h1>
        <h2 className="font-subheading text-xl md:text-2xl">
          I’m a he/him living in Stockholm, Sweden.
        </h2>
      </div>
      <div className="max-w-[500px] sm:min-w-[300px]">
        <Image
          src={profile}
          className="rounded-2xl w-full border-2 border-imgborder bg-cover"
          width={1000}
          height={800}
          alt="Portrait of Alvar Lagerlöf"
          priority
        />
      </div>
    </header>
  );
}

function Story() {
  return (
    <section>
      <h3 className="font-heading text-4xl mb-8">My story</h3>
      <article className="prose">
        <p>
          It all began with a $2 computer. How do you ask? Well, when I was younger, I played
          Minecraft a lot. Naturally, I wanted to play with my friends, so I figured I'd create a
          server for us.
        </p>
        <p>
          So I went to a flea market and searched for the cheapest computer I could find. For $2, I
          got an absolute wreck. Not knowing what I had bought, I took it home and installed a Linux
          distribution on it.{" "}
        </p>
        <p>
          It worked better than expected. But something was missing. All "cool" servers had a
          website. I wanted mine to have one too. An Apache install and some typing later, there was
          a website. It snowballed from there. Being a developer was more fun than playing the game.
        </p>
        <p>
          Since then, I've experimented with many things. Everything from Android and iOS apps, to
          decentralized tic-tac-toe, to neural networks based. Along the way, I realized that I am
          becoming more and more interested in design as well. When I'm not either of those, I like
          to ski and take photos.
        </p>
      </article>
    </section>
  );
}

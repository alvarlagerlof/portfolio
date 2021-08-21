import Head from "next/head";
import Image from "next/image";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";

import getExperience from "libs/experience";
import { Experience } from "types";
import { formatDate } from "libs/utils/date";

type ExperienceProps = {
  experience: Experience[];
};

export default function About({ experience }: ExperienceProps) {
  return (
    <>
      <Head>
        <title>About me - Alvar Lagerlöf</title>
        <meta name="description" content="I’m a he/him living in Stockholm, Sweden"></meta>
        <meta property="og:title" content="About me"></meta>
        <meta property="og:description" content="I’m a he/him living in Stockholm, Sweden"></meta>
      </Head>

      <WithDividers direction="vertical">
        <Header />
        <WithDividers direction="horizontal">
          <SectionMyStory />
          <SectionSocialLinks />
        </WithDividers>
        <SectionExperience experience={experience} />
      </WithDividers>
    </>
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
      <div className="max-w-[500px]">
        <Image
          src="/profile.png"
          className="rounded-3xl w-full bordered"
          width="1000"
          height="800"
          objectFit="cover"
          alt="Portrait of Alvar Lagerlöf"
        />
      </div>
    </header>
  );
}

function SectionMyStory() {
  return (
    <section>
      <h3 className="font-heading text-4xl mb-8">My story</h3>
      <article className="prose">
        <p>
          It all begain with a $2 computer. How, you ask? Well, when I was younger I played a lot of
          Minecraft. Naturally, I wanted to play with friends, so I figured that I'd create a server
          for us. I went to a flea market and looked for the cheapest computer I could find. For $2,
          I got an absolute wreck. Not knowing what I had bought, I took it home and installed a
          Linux distribution on it.
        </p>
        <p>
          Surprisingly, it worked fine. However, something was missing. All of the "cool" servers
          had a website. I wanted mine to have one too. An Apache install and some typing later,
          there was a website. Now, I found that more fun than actually playing the game. It
          snowballed from there.
        </p>
        <p>
          Since then, I've tried a lot of different things. Everything from Android and iOS apps, to
          decentralized tic-tac-toe, to neural networks based on ImageNet.
        </p>
        <p>
          Along the way, I've realized that I like working with declarative UI and have grown
          increasingly interested in design as well. When I'm not coding, I like to ski and take
          photos.
        </p>
      </article>
    </section>
  );
}

function SectionExperience({ experience }: ExperienceProps) {
  return (
    <section>
      <h3 className="font-heading text-4xl mb-8">Experience</h3>
      <ul className="space-y-8">
        {experience.map(item => (
          <ExperienceItem key={item.title + item.company} experience={item} />
        ))}
      </ul>
    </section>
  );
}

function SectionSocialLinks() {
  return (
    <section className="md:min-w-[300px]">
      <h3 className="font-heading text-4xl mb-8">Social links</h3>

      <ul className="flex flex-col space-y-2">
        <SocialLink
          name="Twitter"
          href="https://twitter.com/alvarlagerlof"
          icon="/icons/socials/twitter.svg"
        />
        <SocialLink
          name="GitHub"
          href="https://github.com/alvarlagerlof"
          icon="/icons/socials/github.svg"
        />
        <SocialLink
          name="LinkedIn"
          href="https://linkedin.com/in/alvarlagerlof"
          icon="/icons/socials/linkedin.svg"
        />
        <SocialLink
          name="Polywork"
          href="https://polywork.com/alvar"
          icon="/icons/socials/polywork.svg"
        />
        <SocialLink name="Email" href="mailto:hello@alvar.dev" icon="/icons/socials/email.svg" />
        <SocialLink
          name="ArtStation"
          href="https://www.artstation.com/alvarlagerlof"
          icon="/icons/socials/artstation.svg"
        />
        <SocialLink
          name="Unsplash"
          href="https://unsplash.com/@alvarlagerlof"
          icon="/icons/socials/unsplash.svg"
        />
      </ul>
    </section>
  );
}

type ExperienceItemProps = {
  experience: Experience;
};

function ExperienceItem({ experience }: ExperienceItemProps) {
  const getDate = (): string => {
    const format = "MMM yyyy";

    if (experience.date.end === experience.date.start) {
      return `${formatDate(experience.date.end, format)}`;
    }
    return `${formatDate(experience.date.start, format)} - ${formatDate(
      experience.date.end,
      format
    )}`;
  };

  return (
    <li key={experience.content} className="flex flex-row items-start">
      <div className="mr-4">
        <Image aria-hidden src="/icons/star.svg" alt="Star" height="26" width="26" />
      </div>

      <div>
        <h4 className="text-xl font-subheading font-semibold mb-1">
          {experience.title} at {experience.company}
        </h4>
        <em className="block mb-2">
          {experience.type} • {getDate()}
        </em>
        <p className="prose">{experience.content}</p>
        {experience.link && (
          <div className="mt-4">
            <ArrowLink href={experience.link}>Learn more</ArrowLink>
          </div>
        )}
      </div>
    </li>
  );
}

type SocialLinkProps = {
  name: string;
  href: string;
  icon: string;
};

function SocialLink({ name, href, icon }: SocialLinkProps) {
  return (
    <li>
      <ArrowLink newTab href={href}>
        <div className="inline-block mr-3 translate-y-1 ">
          <Image src={icon} alt={name + " logo"} height="22" width="22" />
        </div>

        <span className="font-subheading font-semibold text-xl -mt-4">{name}</span>
      </ArrowLink>
    </li>
  );
}

export async function getStaticProps() {
  return {
    props: {
      experience: await getExperience(),
    },
  };
}

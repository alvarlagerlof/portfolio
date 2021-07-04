import { DateTime } from "luxon";
import Head from "next/head";
import Image from "next/image";

import ArrowLink from "../components/ArrowLink";
import WithDividers from "../components/WithDividers";

import getExperience from "../libs/experience";

export default function About({ experience }) {
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
          unoptimized={true}
          src="/profile.png"
          className="rounded-3xl bordered w-full"
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

function SectionExperience({ experience }) {
  return (
    <section>
      <h3 className="font-heading text-4xl mb-8">Experience</h3>
      <ul className="space-y-8">
        {experience.map(data => (
          <ExperienceItem key={data.title + data.company} data={data} />
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
          href="ttps://linkedin.com/in/alvarlagerlof"
          icon="/icons/socials/linkedin.svg"
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

function ExperienceItem({ data: { title, company, type, link, startDate, endDate, content } }) {
  const formatDate = dateString => {
    return DateTime.fromMillis(dateString).toFormat("MMM yyyy");
  };

  const getDate = () => {
    if (startDate == endDate) {
      return `${formatDate(startDate)}`;
    }
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <li key={content} className="flex flex-row items-start">
      <div className="mr-4">
        <Image
          aria-hidden
          unoptimized={true}
          src="/icons/star.svg"
          alt="Star"
          height="26"
          width="26"
        />
      </div>

      <div>
        <h4 className="text-xl font-subheading font-semibold mb-1">
          {title} at {company}
        </h4>
        <em className="block mb-2">
          {type} • {getDate()}
        </em>
        <p className="prose">{content}</p>
        {link && (
          <div className="mt-4">
            <ArrowLink href={link}>Learn more</ArrowLink>
          </div>
        )}
      </div>
    </li>
  );
}

function SocialLink({ name, href, icon }) {
  return (
    <li>
      <ArrowLink newTab href={href}>
        <div className="inline-block mr-3 translate-y-1 ">
          <Image unoptimized={true} src={icon} alt={name + " logo"} height="22" width="22" />
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

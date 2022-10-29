import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import groq from "groq";

import { Experience, Social } from "types";

import { formatDate } from "lib/utils/date";
import { getClient } from "lib/sanity/sanity.server";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";
import Meta from "components/Meta";
import NextSanityImage from "components/SanityImage";

type ExperienceProps = {
  experience: Experience[];
  socials: Social[];
};

const experienceQuery = groq`
*[_type == "experience"] | order(date.start desc) {
  _id,
  company,
  jobTitle,
  employmentType,
  date,
  body,
  link
}
`;

const spocialsQuery = groq`
*[_type == "social"] {
  _id,
  networkName,
  userName,
  link,
  icon,
}
`;

export default function About({ experience, socials }: ExperienceProps) {
  return (
    <>
      <Meta title="About me" description="My story starts with a $2 computer from a flea market" />

      <WithDividers direction="vertical">
        <Header />
        <WithDividers direction="horizontal">
          <SectionMyStory />
          <SectionSocialLinks socials={socials} />
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
      <div className="max-w-[500px] sm:min-w-[300px]">
        <Image
          src="/profile.png"
          className="rounded-3xl w-full bordered bg-cover"
          width={1000}
          height={800}
          alt="Portrait of Alvar Lagerlöf"
          priority
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

function SectionExperience({ experience }: { experience: Experience[] }) {
  return (
    <section>
      <h3 className="font-heading text-4xl mb-8">Experience</h3>
      <ul className="space-y-8">
        {experience.map(item => (
          <ExperienceItem key={item._id} experience={item} />
        ))}
      </ul>
    </section>
  );
}

function SectionSocialLinks({ socials }: { socials: Social[] }) {
  return (
    <section className="md:min-w-[300px]">
      <h3 className="font-heading text-4xl mb-8">Social links</h3>

      <ul className="flex flex-col space-y-2">
        {socials.map(social => {
          return (
            <li key={social._id}>
              <ArrowLink newTab href={social?.link ?? ""}>
                <div className="inline-block mr-3 translate-y-1 ">
                  <NextSanityImage
                    image={social?.icon}
                    placeholder="empty"
                    height={22}
                    width={22}
                    alt={social.networkName + " icon"}
                  />
                </div>

                <span className="font-subheading font-semibold text-xl -mt-4">
                  {social?.networkName}
                </span>
              </ArrowLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const getDate = (): string => {
    const format = "MMM yyyy";

    if (experience.date?.end === experience.date?.start) {
      return `${formatDate(experience.date?.end, format)}`;
    }

    if (experience.date?.start && !experience.date?.end) {
      return `${formatDate(experience.date?.start, format)} - Present`;
    }

    return `${formatDate(experience.date?.start, format)} - ${formatDate(
      experience.date?.end,
      format
    )}`;
  };

  return (
    <li key={experience._id} className="flex flex-row items-start">
      <div className="mr-4">
        <Image aria-hidden src="/icons/star.svg" alt="Star" height={26} width={26} />
      </div>

      <div>
        <h4 className="text-xl font-subheading font-semibold mb-1">
          {experience?.jobTitle} at {experience?.company}
        </h4>
        <em className="block mb-2">
          {experience?.employmentType} • {getDate()}
        </em>
        <div className="prose">
          <BlockContent blocks={experience?.body} />
        </div>
        {experience.link && (
          <div className="mt-4">
            <ArrowLink href={experience?.link}>Learn more</ArrowLink>
          </div>
        )}
      </div>
    </li>
  );
}

export async function getStaticProps() {
  const experience: Experience[] = await getClient().fetch(experienceQuery);
  const socials: Social[] = await getClient().fetch(spocialsQuery);

  return {
    props: {
      experience: experience,
      socials: socials,
    },
  };
}

import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import groq from "groq";

import { Experience, Social } from "types";

import { formatDate } from "lib/utils/date";
import { getClient } from "lib/sanity/sanity.server";
import { usePreviewSubscription } from "lib/sanity/sanity";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";
import Meta from "components/Meta";
import NextSanityImage from "components/SanityImage";

type ExperienceProps = {
  experienceData: Experience[];
  socialsData: Social[];
  preview: boolean;
};

const experienceQuery = groq`
*[_type == "experience"] {
  _id,
  company,
  jobTitle,
  start,
  end,
  text,
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

export default function About({ experienceData, socialsData, preview }: ExperienceProps) {
  const { data: experience } = usePreviewSubscription(experienceQuery, {
    initialData: experienceData,
    enabled: preview,
  });

  const { data: socials } = usePreviewSubscription(spocialsQuery, {
    initialData: socialsData,
    enabled: preview,
  });

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
                    height="22"
                    width="22"
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

type ExperienceItemProps = {
  experience: Experience;
};

function ExperienceItem({ experience }: ExperienceItemProps) {
  const getDate = (): string => {
    const format = "MMM yyyy";

    if (experience?.end === experience?.start) {
      return `${formatDate(experience?.end, format)}`;
    }
    return `${formatDate(experience?.start, format)} - ${formatDate(experience?.end, format)}`;
  };

  return (
    <li key={experience._id} className="flex flex-row items-start">
      <div className="mr-4">
        <Image aria-hidden src="/icons/star.svg" alt="Star" height="26" width="26" />
      </div>

      <div>
        <h4 className="text-xl font-subheading font-semibold mb-1">
          {experience?.jobTitle} at {experience?.company}
        </h4>
        <em className="block mb-2">
          {experience?.employmentType} • {getDate()}
        </em>
        <div className="prose">
          <BlockContent blocks={experience?.text} />
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

export async function getStaticProps({ preview = false }) {
  const experience: Experience[] = await getClient(preview).fetch(experienceQuery);
  const socials: Social[] = await getClient(preview).fetch(spocialsQuery);

  return {
    props: {
      experienceData: experience,
      socialsData: socials,
      preview,
    },
  };
}

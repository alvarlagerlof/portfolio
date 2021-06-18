import { DateTime } from "luxon";
import Head from "next/head";
import Image from "next/image";

import ArrowLink from "../components/ArrowLink";
import Separator from "../components/Separator";

import getExperience from "../libs/experience";

function Experience({ data: { title, company, type, link, startDate, endDate, content } }) {
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
      <img src="/icons/star.svg" className="w-6 h-6 mr-2" />
      <div>
        <h4 className="text-xl font-subheading font-semibold mb-1">
          {title} at {company}
        </h4>
        <em className="block mb-2">
          {type} • {getDate()}
        </em>
        <p>{content}</p>
        {link && (
          <div className="mt-4">
            <ArrowLink href={link}>Learn more</ArrowLink>
          </div>
        )}
      </div>
    </li>
  );
}

function SocialIcon({ name, href, icon }) {
  return (
    <li>
      <a href={href} aria-label={name}>
        <img className="w-6 h-6 md:w-8 md:h-8" src={icon} />
      </a>
    </li>
  );
}

export default function About({ experience }) {
  return (
    <>
      <Head>
        <title>About me - Alvar Lagerlöf</title>
        <meta
          name="description"
          content="What does a $2 computer at a flea market have to do with me writing this? Turns out... everything!"
        ></meta>
        <meta property="og:title" content="About me"></meta>
        <meta
          property="og:description"
          content="What does a $2 computer at a flea market have to do with me writing this? Turns out... everything!"
        ></meta>
      </Head>

      <header className="flex flex-col-reverse md:flex-row items-center">
        <div className="mt-8 md:mr-12 md:mt-0">
          <h1 className="font-heading text-4xl md:text-7xl mb-4">Hej</h1>
          <h2 className="font-subheading text-xl md:text-2xl mb-12">
            I’m a swedish he/him living in Stockholm, Sweden. I like to code and design.
          </h2>
          <ul className="flex flex-row space-x-6">
            <SocialIcon
              name="Twitter"
              href="https://twitter.com/alvarlagerlof"
              icon="/icons/twitter.svg"
            />
            <SocialIcon
              name="LinkedIn"
              href="ttps://linkedin.com/in/alvarlagerlof"
              icon="/icons/linkedin.svg"
            />
            <SocialIcon
              name="GitHub"
              href="https://github.com/alvarlagerlof"
              icon="/icons/github.svg"
            />
            <SocialIcon name="Email" href="mailto:hello@alvar.dev" icon="/icons/email.svg" />
          </ul>
        </div>
        <Image
          src="/profile.png"
          className="rounded-3xl bordered w-full"
          width="400"
          height="400"
        />
      </header>

      <Separator />

      <div className=" flex flex-col xl:flex-row space-y-8 xl:space-x-10 xl:space-y-0">
        <section>
          <h3 className="font-heading text-4xl mb-8">Experience</h3>
          <ul className="space-y-8">
            {experience.map(data => (
              <Experience key={data.title + data.company} data={data} />
            ))}
          </ul>
        </section>

        <Separator vertical="xl" />

        <section className="xl:max-w-[50%]">
          <h3 className="font-heading text-4xl mb-8">My story</h3>
          <div className="space-y-4">
            <p>
              My story starts with, believe it or not, Minecraft. I was playing it a lot when I was
              13. Naturally, I wanted to play with friends. I bought the $2 computer at a flea
              market and installed Ubuntu Server on it. Now of course, every proper Minecraft server
              has a website. So I installed LAMP and started reading up on how to code in something
              called HTML. Quickly, w3schools.com became my guide. Before I knew it, I was making
              websites.
            </p>
            <p>
              Then started my wild ride of app development on{" "}
              <ArrowLink newTab href="https://github.com/alvarlagerlof/temadagar-android">
                two
              </ArrowLink>{" "}
              different{" "}
              <ArrowLink newTab href="https://koda.nu/app">
                projects
              </ArrowLink>
              . I learned Java (and later Kotlin) and Swift development. One of the apps needed
              offline support with writes, so I implemented a local database using Realm and worked
              on syncing with basic time-based diffing.
            </p>
            <p>
              Some years later I started experimenting with retraining ImageNet to do what classify
              things I wanted. Using IFPS as a data source for web apps was also really interesting.
              Also had some fun with trying to make a{" "}
              <ArrowLink newTab href="https://github.com/alvarlagerlof/ball-pid">
                ball balance
              </ArrowLink>{" "}
              on a plate with two servos mounted under it. Somewhere along the way, I got briefly
              back into Minecraft and started to make Bukkit plugins. I made a working Quake-like{" "}
              <ArrowLink newTab href="https://github.com/alvarlagerlof/quake">
                FPS
              </ArrowLink>{" "}
              in Java.
            </p>
            <p>
              During my journey, I've grown interested in UI and UX design and do now enjoy
              iterating on mockups in Figma before starting to code. In recent years I've worked
              mostly with React, but I've also tried Vue.js and Svelte and find declarative
              interactive UI as a whole quite interesting.
            </p>
            <p>
              When I'm not coding or designing, I like to take{" "}
              <ArrowLink href="https://unsplash.com/@alvarlagerlof">photos</ArrowLink> or experiment
              with rendering some{" "}
              <ArrowLink href="https://www.artstation.com/alvarlagerlof">cool things</ArrowLink> in
              Blender.
            </p>
            <p>TODO: Make this shorter</p>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      experience: await getExperience(),
    },
  };
}

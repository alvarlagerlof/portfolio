import Head from "next/head";

import { getProjects } from "../libs/projects";

import ArrowLink from "../components/ArrowLink";
import Separator from "../components/Separator";
import Image from "next/image";

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects - Alvar Lagerlöf</title>
        <meta name="description" content="Projects I've worked on"></meta>
        <meta property="og:title" content="Projects"></meta>
        <meta property="og:description" content="Projects I've worked on"></meta>
      </Head>

      <header>
        <h1 className="font-heading text-4xl md:text-7xl mb-4">Projects</h1>

        <h2 className="font-subheading text-xl md:text-2xl">
          You can also check out my{" "}
          <ArrowLink href="https://github.com/alvarlagerlof">Github</ArrowLink>,{" "}
          <ArrowLink href="https://unsplash.com/@alvarlagerlof">Unsplash</ArrowLink> and{" "}
          <ArrowLink href="https://www.artstation.com/alvarlagerlof">ArtStation</ArrowLink>
        </h2>
      </header>

      <Separator />

      <section>
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
          {projects.map(({ title, description, link, image, blurhash }) => (
            <li key={title}>
              <a href={link} target="_blank" rel="noopener">
                <Image
                  className="rounded-3xl bordered"
                  alt="Project logo banner"
                  src={"/content/projects/" + image}
                  width="400"
                  height="250"
                  objectFit="cover"
                  // placeholder="blur"
                  // blurDataURL={blurhash}
                />

                <h3 className="font-heading text-2xl xl:text-4xl mt-2 xl:mt-4 mb-1 xl:mb-2">
                  {title}
                </h3>
                <p>{description}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  };
}

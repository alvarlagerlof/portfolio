import Image from "next/image";
import Link from "next/link";

import { getProjects } from "libs/projects";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";
import Meta from "components/Meta";

import { Project } from "types";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Meta title="Projects" description="These are some of the projects I've worked on" />

      <WithDividers direction="vertical">
        <Header />
        <SecitonProjects projects={projects} />
      </WithDividers>
    </>
  );
}

function Header() {
  return (
    <header>
      <h1 className="font-heading text-4xl md:text-7xl mb-4">Projects</h1>

      <h2 className="font-subheading text-xl md:text-2xl">
        You can also check out my{" "}
        <ArrowLink href="https://github.com/alvarlagerlof">Github</ArrowLink>,{" "}
        <ArrowLink href="https://unsplash.com/@alvarlagerlof">Unsplash</ArrowLink> and{" "}
        <ArrowLink href="https://www.artstation.com/alvarlagerlof">ArtStation</ArrowLink>
      </h2>
    </header>
  );
}

function SecitonProjects({ projects }: ProjectsProps) {
  return (
    <section>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {projects.map(project => (
          <li key={project.title}>
            <Link href={project.link ?? "#"} passHref>
              <a target={project.link ? "_blank" : "_self"} rel="noreferrer">
                <Image
                  className="rounded-3xl bordered"
                  alt="Project logo banner"
                  src={"/content/projects/" + project.image}
                  loading="lazy"
                  width="400"
                  height="230"
                  objectFit="cover"
                  // placeholder="blur"
                  // blurDataURL={blurhash}
                />
                <h3 className="font-heading break-all	text-2xl xl:text-3xl mt-2 xl:mt-4 mb-1 xl:mb-2">
                  {project.title}
                </h3>
                <p>{project.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  };
}

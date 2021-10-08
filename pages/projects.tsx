import Link from "next/link";
import groq from "groq";

import { Project } from "types";

import { getClient } from "lib/sanity/sanity.server";
import { usePreviewSubscription } from "lib/sanity/sanity";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";
import Meta from "components/Meta";
import NextSanityImage from "components/SanityImage";

type ProjectsProps = {
  data: Project[];
  preview: boolean;
};

const projectsQuery = groq`
*[_type == "project"] {
  _id,
  name,
  description,
  link,
  banner,
}
`;

export default function Projects({ data, preview }: ProjectsProps) {
  const { data: projects } = usePreviewSubscription(projectsQuery, {
    initialData: data,
    enabled: preview,
  });

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
        You can also check out my socials on the <ArrowLink href="/about">about page</ArrowLink>.
      </h2>
    </header>
  );
}

function SecitonProjects({ projects }: { projects: Project[] }) {
  return (
    <section>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {projects.map(project => (
          <ProjectItem key={project._id} {...project} />
        ))}
      </ul>
    </section>
  );
}

function ProjectItem(project: Project) {
  return (
    <li>
      <Link href={project.link ?? "#"} passHref>
        <a target={project.link ? "_blank" : "_self"} rel="noreferrer">
          <NextSanityImage
            image={project.banner}
            className="rounded-3xl bordered"
            alt="Project logo banner"
            loading="lazy"
            width="400"
            height="230"
            objectFit="cover"
          />
          <h3 className="font-heading break-all	text-2xl xl:text-3xl mt-2 xl:mt-4 mb-1 xl:mb-2">
            {project.name}
          </h3>
          <p>{project.description}</p>
        </a>
      </Link>
    </li>
  );
}

export async function getStaticProps({ preview = false }) {
  const projects: Project = await getClient(preview).fetch(projectsQuery);

  return {
    props: {
      data: projects,
      preview,
    },
  };
}

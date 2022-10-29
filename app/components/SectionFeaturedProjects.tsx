import ArrowLink from "components/ArrowLink";
import { getClient } from "lib/sanity/sanity.server";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { Project } from "types";
import ProjectItem from "./ProjectItem";

function SkeletonProject() {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="block h-[75px] w-[120px] bg-skeleton rounded-xl" />

      <div className="-m-1">
        <div className="block w-24 h-[1.25rem] bg-skeleton rounded mb-3" />
        <div className="block w-[300px] h-[1rem] bg-skeleton rounded" />
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="space-y-8">
      <SkeletonProject />
      <SkeletonProject />
      <SkeletonProject />
    </div>
  );
}

export default function SectionFeaturedProjects() {
  return (
    <section className="w-1/2">
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Featured projects</h3>
      <Suspense fallback={<Skeleton />}>
        <List />
      </Suspense>
    </section>
  );
}

const query = groq`
*[_type == "project" && featured == true] [0..3] {
  _id,
  name,
  description,
  link,
  banner
}
`;

async function List() {
  const projects: Project[] = await getClient().fetch(query);

  await new Promise(r => setTimeout(r, 1000));

  return (
    <>
      <ul className="space-y-6 md:space-y-8">
        {projects.map(project => (
          <ProjectItem project={project} key={project._id} />
        ))}
      </ul>
      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/projects">All projects</ArrowLink>
      </h4>
    </>
  );
}

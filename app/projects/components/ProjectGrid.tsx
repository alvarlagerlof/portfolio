import { getClient } from "lib/sanity/sanity.server";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { Project } from "types";
import ProjectItem, { ProjectItemSkeleton } from "./ProjectItem";

const query = groq`
*[_type == "project"] {
  _id,
  name,
  description,
  link,
  banner,
}
`;

export default async function ProjectGrid() {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
      <Suspense fallback={<ProjectGridSkeleton />}>
        <ProjectGridData />
      </Suspense>
    </ul>
  );
}

async function ProjectGridData() {
  const projects: Project[] = await getClient().fetch(query);
  await new Promise(r => setTimeout(r, 1000));

  return (
    <>
      {projects.map((project, i) => {
        return <ProjectItem key={project._id} {...project} isFirst={i == 0} />;
      })}
    </>
  );
}

export function ProjectGridSkeleton() {
  return (
    <>
      <ProjectItemSkeleton />
      <ProjectItemSkeleton />
      <ProjectItemSkeleton />
      <ProjectItemSkeleton />
    </>
  );
}

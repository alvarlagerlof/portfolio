import ArrowLink from "components/ArrowLink";
import { getClient } from "lib/sanity/sanity.server";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { Project } from "types";
import { Item, ItemLoading } from "./Item";

const query = groq`
*[_type == "project" && featured == true] [0..3] {
  _id,
  name,
  description,
  link,
  banner
}
`;

export function FeaturedProjects() {
  return (
    <section className="w-1/2">
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Featured projects</h3>
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <Projects />
      </Suspense>
    </section>
  );
}

async function Projects() {
  const projects: Project[] = await getClient().fetch(query);

  await new Promise(r => setTimeout(r, 1000));

  return (
    <>
      <ul className="space-y-6 md:space-y-8">
        {projects.map(project => (
          <Item key={project._id} {...project} />
        ))}
      </ul>
      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/projects">All projects</ArrowLink>
      </h4>
    </>
  );
}

function Loading() {
  return (
    <div className="space-y-8">
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
    </div>
  );
}

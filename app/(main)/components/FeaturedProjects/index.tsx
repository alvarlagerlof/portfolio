import { ArrowLink } from "components/ArrowLink";
import { sanityClient } from "lib/sanity/client";
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
  banner {
    asset->{
      ...,
      metadata
    }
  }
}
`;

export function FeaturedProjects() {
  return (
    <section className="md:w-1/2">
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Featured projects</h3>
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <Projects />
      </Suspense>
    </section>
  );
}

async function Projects() {
  const projects: Project[] = await sanityClient.fetch(query);

  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

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

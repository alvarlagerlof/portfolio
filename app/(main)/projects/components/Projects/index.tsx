import { sanityClient } from "lib/sanity/client";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { Project } from "types";

import { Item, ItemLoading } from "./Item";

const query = groq`
*[_type == "project"] {
  _id,
  name,
  description,
  link,
  banner {
    asset->{
      _id,
      metadata {
        lqip,
        dimensions {
          width,
          height
        }
      }
    }
  }
}
`;

export async function Projects() {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <ProjectsList />
      </Suspense>
    </ul>
  );
}

async function ProjectsList() {
  const projects: Project[] = await sanityClient.fetch(query);
  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  return (
    <>
      {projects.map((project, i) => {
        return (
          <Item
            key={project._id}
            banner={project.banner}
            link={project.link}
            name={project.name}
            description={project.description}
            isFirst={i == 0}
          />
        );
      })}
    </>
  );
}

export function Loading() {
  return (
    <>
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
    </>
  );
}

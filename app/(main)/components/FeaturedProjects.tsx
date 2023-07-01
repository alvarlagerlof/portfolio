import { ArrowLink } from "components/ArrowLink";
import { createSanityClientWithDraftMode } from "lib/sanity/client";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { NextSanityImage } from "components/NextSanityImage";
import Link from "next/link";
import { Project } from "types";

const query = groq`
*[_type == "project" && featured == true] [0..3] {
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

export function FeaturedProjects() {
  return (
    <section className="md:w-1/2">
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Featured projects</h3>
      <Suspense fallback={<FeaturedProjectsListLoading />}>
        {/* @ts-ignore */}
        <FeaturedProjectsList />
      </Suspense>
    </section>
  );
}

async function FeaturedProjectsList() {
  const projects: Project[] = await createSanityClientWithDraftMode().fetch(query);

  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  return (
    <>
      <ul className="space-y-6 md:space-y-8">
        {projects.map(project => (
          <FeaturedProjectItem
            key={project._id}
            name={project.name}
            link={project.link}
            description={project.description}
            banner={project.banner}
          />
        ))}
      </ul>
      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/projects">All projects</ArrowLink>
      </h4>
    </>
  );
}

function FeaturedProjectsListLoading() {
  return (
    <div className="space-y-8">
      <FeaturedProjectItemLoading />
      <FeaturedProjectItemLoading />
      <FeaturedProjectItemLoading />
    </div>
  );
}

export function FeaturedProjectItem({
  name,
  link,
  description,
  banner,
}: Omit<Project, "_id" | "featured">) {
  return (
    <li className="flex md:flex-row items-start sm:items-center space-x-4">
      <div className="min-w-[120px]">
        <NextSanityImage
          image={banner}
          className="border-2 border-imgborder rounded-xl object-cover"
          width={120}
          height={75}
          priority
          alt={name + " banner"}
        />
      </div>
      <div className="-m-1">
        <h4 className="text-xl font-subheading font-semibold break-all mb-1">
          <Link href={link ?? "#"} target={link ? "_blank" : "_self"} rel="noreferrer">
            {name}
          </Link>
        </h4>
        <p>{description}</p>
      </div>
    </li>
  );
}

export function FeaturedProjectItemLoading() {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="block h-[75px] w-[120px] bg-skeleton rounded-xl" />

      {/* hacky, fix this */}
      <div className="-m-1 max-w-[calc(100%-130px)]">
        <div className="block w-24 max-w-full h-[1.25rem] bg-skeleton rounded mb-3" />
        <div className="block w-[300px] max-w-full h-[1rem] bg-skeleton rounded" />
      </div>
    </div>
  );
}

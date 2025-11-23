import { createSanityClientWithDraftMode } from "lib/sanity/client";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { Project } from "types";
import { NextSanityImage } from "components/NextSanityImage";
import { Skeleton } from "components/Skeleton";
import { SkeletonText } from "components/SkeletonText";
import Link from "next/link";
import { cacheLife } from "next/cache";

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
      <Suspense fallback={<ProjectsListLoading />}>
        <ProjectsList />
      </Suspense>
    </ul>
  );
}

async function ProjectsList() {
  "use cache";
  cacheLife("minutes");

  const projects: Project[] = await (
    await createSanityClientWithDraftMode()
  ).fetch(query, undefined);

  return (
    <>
      {projects.map((project, i) => {
        return (
          <ProjectItem
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

export function ProjectsListLoading() {
  return (
    <>
      <ProjectItemLoading />
      <ProjectItemLoading />
      <ProjectItemLoading />
      <ProjectItemLoading />
    </>
  );
}

type ProjectAndIsFirst = Project & {
  isFirst: boolean;
};

export function ProjectItem({
  isFirst,
  banner,
  link,
  name,
  description,
}: Omit<ProjectAndIsFirst, "_id" | "featured">) {
  return (
    <li>
      <NextSanityImage
        image={banner}
        className="rounded-2xl border-2 border-imgborder bg-cover"
        alt="Project logo banner"
        width={400}
        height={230}
        priority={isFirst}
      />
      <h3 className="font-heading break-all	text-2xl xl:text-3xl mt-2 xl:mt-4 mb-1 xl:mb-2">
        <Link href={link ?? "#"} target={link ? "_blank" : "_self"} rel="noreferrer">
          {name}
        </Link>
      </h3>
      <p>{description}</p>
    </li>
  );
}

export function ProjectItemLoading() {
  return (
    <div>
      <Skeleton className="w-full h-[180px] rounded-2xl!" />
      <SkeletonText className="w-48 max-w-full h-[1.5rem] mb-2 mt-6" />
      <SkeletonText className="w-36 max-w-full h-[1rem]" />
    </div>
  );
}

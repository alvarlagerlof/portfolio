"use client";

import { NextSanityImage } from "components/SanityImage";
import { Skeleton } from "components/Skeleton";
import { SkeletonText } from "components/SkeletonText";
import Link from "next/link";
import { useRef } from "react";
import { Project } from "types";

type ProjectAndIsFirst = Project & {
  isFirst: boolean;
};

export function Item({ isFirst, ...project }: ProjectAndIsFirst) {
  const link = useRef<HTMLAnchorElement | null>(null);

  return (
    <li
      onClick={e => {
        if (link.current && link.current !== e.target) {
          link.current.click();
        }
      }}
      className="cursor-pointer"
    >
      <NextSanityImage
        image={project.banner}
        className="rounded-3xl border-2 border-imgborder bg-cover"
        alt="Project logo banner"
        width={400}
        height={230}
        priority={isFirst}
      />
      <h3 className="font-heading break-all	text-2xl xl:text-3xl mt-2 xl:mt-4 mb-1 xl:mb-2">
        <Link
          href={project.link ?? "#"}
          target={project.link ? "_blank" : "_self"}
          rel="noreferrer"
          ref={link}
        >
          {project.name}
        </Link>
      </h3>
      <p>{project.description}</p>
    </li>
  );
}

export function ItemLoading() {
  return (
    <div>
      <Skeleton className="w-full h-[180px] !rounded-3xl" />
      <SkeletonText className="w-48 max-w-full h-[1.5rem] mb-2 mt-6" />
      <SkeletonText className="w-36 max-w-full h-[1rem]" />
    </div>
  );
}

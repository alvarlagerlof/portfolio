"use client";

import { NextSanityImage } from "components/SanityImage";
import Link from "next/link";
import { useRef } from "react";
import { Project } from "types";

export function Item(project: Project) {
  const link = useRef<HTMLAnchorElement | null>(null);

  return (
    <li
      onClick={e => {
        if (link.current && link.current !== e.target) {
          link.current.click();
        }
      }}
      className="flex md:flex-row items-start sm:items-center space-x-4 cursor-pointer"
    >
      <div className="min-w-[120px]">
        <NextSanityImage
          image={project.banner}
          className="border-2 border-imgborder rounded-xl object-cover"
          width={120}
          height={75}
          priority
          alt={project.name + " banner"}
        />
      </div>
      <div className="-m-1">
        <h4 className="text-xl font-subheading font-semibold break-all mb-1">
          <Link
            href={project.link ?? "#"}
            target={project.link ? "_blank" : "_self"}
            ref={link}
            rel="noreferrer"
          >
            {project.name}
          </Link>
        </h4>
        <p>{project.description}</p>
      </div>
    </li>
  );
}

export function ItemLoading() {
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

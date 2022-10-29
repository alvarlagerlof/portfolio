"use client";

import NextSanityImage from "components/SanityImage";
import Link from "next/link";
import { useRef } from "react";
import { Project } from "types";

export default function ProjectItem({ project }: { project: Project }) {
  const link = useRef(null);

  return (
    <li
      onClick={e => {
        if (link.current !== e.target) {
          link.current.click();
        }
      }}
      className="flex md:flex-row items-start sm:items-center space-x-4 cursor-pointer"
    >
      <div className="min-w-[120px]">
        <NextSanityImage
          image={project.banner}
          className="bordered rounded-xl object-cover"
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

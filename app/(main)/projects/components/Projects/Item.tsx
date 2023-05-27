import { NextSanityImage } from "components/NextSanityImage";
import { Skeleton } from "components/Skeleton";
import { SkeletonText } from "components/SkeletonText";
import Link from "next/link";
import { Project } from "types";

type ProjectAndIsFirst = Project & {
  isFirst: boolean;
};

export function Item({ isFirst, banner, link, name, description }: Omit<ProjectAndIsFirst, "_id" | "featured">) {
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
        <Link
          href={link ?? "#"}
          target={link ? "_blank" : "_self"}
          rel="noreferrer"
        >
          {name}
        </Link>
      </h3>
      <p>{description}</p>
    </li>
  );
}

export function ItemLoading() {
  return (
    <div>
      <Skeleton className="w-full h-[180px] !rounded-2xl" />
      <SkeletonText className="w-48 max-w-full h-[1.5rem] mb-2 mt-6" />
      <SkeletonText className="w-36 max-w-full h-[1rem]" />
    </div>
  );
}

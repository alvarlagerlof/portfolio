import { NextSanityImage } from "components/NextSanityImage";
import Link from "next/link";
import { Project } from "types";

export function Item({ name, link, description, banner }: Omit<Project, "_id" | "featured">) {
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

import { formatDate } from "lib/utils/date";
import BlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import { Experience } from "types";
import ArrowLink from "components/ArrowLink";
import SkeletonText from "components/SkeletonText";
import Skeleton from "components/Skeleton";
import { Star } from "components/Icons/Star";

export function Item(experience: Experience) {
  const getDate = (): string => {
    const format = "MMM yyyy";

    if (experience.date?.end === experience.date?.start) {
      return `${formatDate(experience.date?.end, format)}`;
    }

    if (experience.date?.start && !experience.date?.end) {
      return `${formatDate(experience.date?.start, format)} - Present`;
    }

    return `${formatDate(experience.date?.start, format)} - ${formatDate(
      experience.date?.end,
      format
    )}`;
  };

  return (
    <li key={experience._id} className="flex flex-row space-x-4 items-start">
      <Star aria-hidden className="mt-0.5" />

      <div>
        <h4 className="text-xl font-subheading font-semibold mb-1">
          {experience?.jobTitle} at {experience?.company}
        </h4>
        <em className="block mb-2">
          {experience?.employmentType} • {getDate()}
        </em>
        <div className="prose">
          <BlockContent blocks={experience?.body} />
        </div>
        {experience.link && (
          <div className="mt-4">
            <ArrowLink href={experience?.link}>Learn more</ArrowLink>
          </div>
        )}
      </div>
    </li>
  );
}

export function ItemLoading() {
  return (
    <div className="flex flex-row space-x-4 pb-8">
      <Skeleton className="w-6 h-6 !rounded-full" />
      <div className="space-y-4 mt-0.5">
        <SkeletonText className="w-80 h-[1.25rem]" />
        <SkeletonText className="w-36 h-[1rem]" />
        <SkeletonText className="w-[600px] max-w-full h-36" />
        <SkeletonText className="w-[500px] max-w-full h-16" />
      </div>
    </div>
  );
}

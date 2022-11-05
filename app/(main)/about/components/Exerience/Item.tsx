import { ArrowLink } from "components/ArrowLink";
import { Star } from "components/Icons/Star";
import { Skeleton } from "components/Skeleton";
import { SkeletonText } from "components/SkeletonText";
import { formatDate } from "lib/formatDate";
import { Experience } from "types";
import { PortableText } from "@portabletext/react";

export function Item(experience: Experience) {
  const getDate = (): string => {
    let format: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
    };

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
          <PortableText value={experience?.body} />
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
      <Skeleton className="!w-6 h-6 !rounded-full" />
      {/* hack, fix this later */}
      <div className="space-y-4 mt-0.5 max-w-[calc(100%-30px)]">
        <SkeletonText className="w-80 max-w-full h-[1.25rem]" />
        <SkeletonText className="w-36 max-w-full h-[1rem]" />
        <SkeletonText className="w-[600px] max-w-full h-36" />
        <SkeletonText className="w-[500px] max-w-full h-16" />
      </div>
    </div>
  );
}

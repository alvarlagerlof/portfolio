import { createSanityClientWithDraftMode } from "lib/sanity/client";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { ArrowLink } from "components/ArrowLink";
import { Star } from "components/Icons/Star";
import { Skeleton } from "components/Skeleton";
import { SkeletonText } from "components/SkeletonText";
import { formatDate } from "lib/formatDate";
import { Experience } from "types";
import { PortableText } from "@portabletext/react";

const query = groq`
*[_type == "experience"] | order(date.start desc) {
  _id,
  company,
  jobTitle,
  employmentType,
  date,
  body,
  link
}
`;

export async function ExperienceSection() {
  return (
    <section>
      <h3 className="font-heading text-4xl mb-8">Experience</h3>
      <ul className="space-y-8">
        <Suspense fallback={<ExperienceListLoading />}>
          <ExperienceList />
        </Suspense>
      </ul>
    </section>
  );
}

async function ExperienceList() {
  const experience: Experience[] = await createSanityClientWithDraftMode().fetch(query, undefined, {
    next: { revalidate: 600 },
  });

  return (
    <>
      {experience.map(item => (
        <ExperienceItem
          key={item._id}
          date={item.date}
          company={item.company}
          jobTitle={item.jobTitle}
          body={item.body}
          link={item.link}
          employmentType={item.employmentType}
        />
      ))}
    </>
  );
}

function ExperienceListLoading() {
  return (
    <>
      <ExperienceItemLoading />
      <ExperienceItemLoading />
      <ExperienceItemLoading />
    </>
  );
}

export function ExperienceItem({
  date,
  company,
  jobTitle,
  body,
  link,
  employmentType,
}: Omit<Experience, "_id">) {
  const getDate = (): string => {
    let format: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
    };

    if (date?.end === date?.start) {
      return `${formatDate(date?.end, format)}`;
    }

    if (date?.start && !date?.end) {
      return `${formatDate(date?.start, format)} - Present`;
    }

    return `${formatDate(date?.start, format)} - ${formatDate(date?.end, format)}`;
  };

  return (
    <li className="flex flex-row space-x-4 items-start">
      <Star aria-hidden className="mt-0.5" />

      <div>
        <h4 className="text-xl font-subheading font-semibold mb-1">
          {jobTitle} at {company}
        </h4>
        <em className="block mb-2">
          {employmentType} • {getDate()}
        </em>
        <div className="prose">
          <PortableText value={body} />
        </div>
        {link && (
          <div className="mt-4">
            <ArrowLink href={link}>Learn more</ArrowLink>
          </div>
        )}
      </div>
    </li>
  );
}

export function ExperienceItemLoading() {
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

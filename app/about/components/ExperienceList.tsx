import { Experience } from "types";
import { getClient } from "lib/sanity/sanity.server";
import { groq } from "next-sanity";
import ExperienceListItem, { ExperienceListItemSkeleton } from "./ExperienceListItem";
import { Suspense } from "react";

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

export default async function ExperienceList() {
  return (
    <section>
      <h3 className="font-heading text-4xl mb-8">Experience</h3>
      <ul className="space-y-8">
        <Suspense fallback={<ExperienceListSkeleton />}>
          {/* @ts-ignore */}
          <ExperienceListData />
        </Suspense>
      </ul>
    </section>
  );
}

async function ExperienceListData() {
  const experience: Experience[] = await getClient().fetch(query);

  await new Promise(r => setTimeout(r, 1000));

  return (
    <>
      {experience.map(item => (
        <ExperienceListItem key={item._id} {...item} />
      ))}
    </>
  );
}

function ExperienceListSkeleton() {
  return (
    <>
      <ExperienceListItemSkeleton />
      <ExperienceListItemSkeleton />
      <ExperienceListItemSkeleton />
    </>
  );
}

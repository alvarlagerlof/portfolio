import { sanityClient } from "lib/sanity/client";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { Experience } from "types";

import { Item, ItemLoading } from "./Item";

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

export async function Experience() {
  return (
    <section>
      <h3 className="font-heading text-4xl mb-8">Experience</h3>
      <ul className="space-y-8">
        <Suspense fallback={<Loading />}>
          {/* @ts-ignore */}
          <ExperienceList />
        </Suspense>
      </ul>
    </section>
  );
}

async function ExperienceList() {
  const experience: Experience[] = await sanityClient.fetch(query);

  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  return (
    <>
      {experience.map(item => (
        <Item
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

function Loading() {
  return (
    <>
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
    </>
  );
}

import { getClient } from "lib/sanity/sanity.server";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { Social } from "types";
import SocialLinkItem, { SocialLinkItemSkeleton } from "./SocialLinkItem";

const query = groq`
*[_type == "social"] {
  _id,
  networkName,
  userName,
  link,
  icon,
}
`;

export default async function SocialLinkList() {
  return (
    <section className="md:min-w-[300px]">
      <h3 className="font-heading text-4xl mb-8">Social links</h3>

      <ul className="flex flex-col space-y-2">
        <Suspense fallback={<SocialLinkListSkeleton />}>
          <SocialLinkListData />
        </Suspense>
      </ul>
    </section>
  );
}

async function SocialLinkListData() {
  const socialLinks: Social[] = await getClient().fetch(query);
  await new Promise(r => setTimeout(r, 1000));

  return (
    <>
      {socialLinks.map(social => {
        return <SocialLinkItem {...social} key={social._id} />;
      })}
    </>
  );
}

function SocialLinkListSkeleton() {
  return (
    <>
      <SocialLinkItemSkeleton />
      <SocialLinkItemSkeleton />
      <SocialLinkItemSkeleton />
      <SocialLinkItemSkeleton />
      <SocialLinkItemSkeleton />
    </>
  );
}

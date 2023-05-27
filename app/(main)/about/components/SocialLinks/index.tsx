import { sanityClient } from "lib/sanity/client";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { Social } from "types";

import { Item, ItemLoading } from "./Item";

const query = groq`
*[_type == "social"] {
  _id,
  networkName,
  link,
  icon {
    asset->{
      _id,
      metadata {
        lqip,
        dimensions {
          width,
          height
        }
      }
    }
  }
}
`;

export async function SocialLinks() {
  return (
    <section className="md:min-w-[300px]">
      <h3 className="font-heading text-4xl mb-8">Social links</h3>

      <ul className="flex flex-col space-y-2">
        <Suspense fallback={<Loading />}>
          {/* @ts-ignore */}
          <SocialLinksList />
        </Suspense>
      </ul>
    </section>
  );
}

async function SocialLinksList() {
  const socialLinks: Social[] = await sanityClient.fetch(query);
  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  return (
    <>
      {socialLinks.map(social => {
        return (
          <Item
            key={social._id}
            icon={social.icon}
            networkName={social.networkName}
            link={social.link}
          />
        );
      })}
    </>
  );
}

function Loading() {
  return (
    <>
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
    </>
  );
}

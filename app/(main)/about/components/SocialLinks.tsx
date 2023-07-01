import { createSanityClientWithDraftMode } from "lib/sanity/client";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { Social } from "types";
import { ArrowLink } from "components/ArrowLink";
import { NextSanityImage } from "components/NextSanityImage";
import { Skeleton } from "components/Skeleton";
import { SkeletonText } from "components/SkeletonText";

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
        <Suspense fallback={<SocialLinksListLoading />}>
          {/* @ts-ignore */}
          <SocialLinksList />
        </Suspense>
      </ul>
    </section>
  );
}

async function SocialLinksList() {
  const socialLinks: Social[] = await createSanityClientWithDraftMode().fetch(query);
  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  return (
    <>
      {socialLinks.map(social => {
        return (
          <SocialLinkItem
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

function SocialLinksListLoading() {
  return (
    <>
      <SocialLinkItemLoading />
      <SocialLinkItemLoading />
      <SocialLinkItemLoading />
      <SocialLinkItemLoading />
      <SocialLinkItemLoading />
    </>
  );
}

export function SocialLinkItem({ icon, networkName, link }: Omit<Social, "_id">) {
  return (
    <li>
      <ArrowLink newTab href={link ?? ""}>
        <div className="inline-block mr-3 translate-y-1 ">
          <NextSanityImage
            image={icon}
            placeholder="empty"
            height={22}
            width={22}
            alt={`${networkName} icon`}
          />
        </div>

        <span className="font-subheading font-semibold text-xl -mt-4">{networkName}</span>
      </ArrowLink>
    </li>
  );
}

export function SocialLinkItemLoading() {
  return (
    <div className="flex flex-row space-x-2 pb-1 items-center">
      <Skeleton className="w-6 h-6 rounded-lg" />
      <SkeletonText className="w-28 h-[1.25rem] " />
    </div>
  );
}

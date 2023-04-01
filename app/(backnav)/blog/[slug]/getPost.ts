import { sanityClient } from "lib/sanity/client";
import { groq } from "next-sanity";
import { cache } from "react";
import { Post } from "types";

const query = groq`
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  date,
  body[] {
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    },
    _type == "image" => {
      asset->{
        ...,
        metadata
      }
    }
  }
}
`;

export const getPost = cache(async (slug: string) => {
  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  return await sanityClient.fetch<Post>(query, {
    slug,
  });
});

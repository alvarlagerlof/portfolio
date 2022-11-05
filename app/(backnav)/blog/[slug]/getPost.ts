import { getClient } from "lib/sanity/sanity.server";
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

  return await getClient().fetch<Post>(query, {
    slug,
  });
});

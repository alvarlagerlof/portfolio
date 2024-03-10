import { createSanityClientWithDraftMode } from "lib/sanity/client";
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
}
`;

export const getPost = cache(async (slug: string) => {
  return await createSanityClientWithDraftMode().fetch<Post>(
    query,
    {
      slug,
    },
    {
      next: {
        revalidate: 600,
      },
    },
  );
});

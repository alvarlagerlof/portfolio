import { createSanityClientWithDraftMode } from "lib/sanity/client";
import { groq } from "next-sanity";
import { cacheLife } from "next/cache";
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

export const getPost = async (slug: string) => {
  "use cache";
  cacheLife("minutes");

  return (await createSanityClientWithDraftMode()).fetch<Post>(query, {
    slug,
  });
};

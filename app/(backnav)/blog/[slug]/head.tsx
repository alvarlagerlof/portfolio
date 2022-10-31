import Meta from "components/Meta";
import { getClient } from "lib/sanity/sanity.server";
import { groq } from "next-sanity";
import { Post } from "types";

export const query = groq`
*[_type == "post" && slug.current == $slug][0] {
  title,
  description,
}
`;

export default async function Head({ params: { slug } }) {
  const post: Post = await getClient().fetch(query, {
    slug,
  });

  if (!post) return null;

  return <Meta title={post.title} description={post.description} />;
}

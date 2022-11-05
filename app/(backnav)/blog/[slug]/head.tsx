import { Meta } from "components/Meta";
import { getPost } from "./getPost";

export default async function Head({ params: { slug } }) {
  const post = await getPost(slug);

  if (!post) return null;

  return <Meta title={post.title} description={post.description} ogImageLayout="blogpost" />;
}

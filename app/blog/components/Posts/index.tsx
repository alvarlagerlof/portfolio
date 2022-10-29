import { Post } from "types";
import { Item } from "./Item";

type PostListProps = {
  posts: Partial<Post>[];
};

export function Posts({ posts }: PostListProps) {
  return (
    <ul className="space-y-8">
      {posts.map((post: Post) => {
        return <Item key={post._id} {...post} />;
      })}
    </ul>
  );
}

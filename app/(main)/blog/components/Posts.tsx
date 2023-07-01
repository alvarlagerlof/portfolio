import { Post, PostPreview } from "types";
import { SkeletonText } from "components/SkeletonText";
import { formatDate } from "lib/formatDate";
import Link from "next/link";

type PostListProps = {
  posts: PostPreview[];
};

export function Posts({ posts }: PostListProps) {
  return (
    <ul className="space-y-8">
      {posts.map((post: Post) => {
        return (
          <PostItem
            key={post._id}
            title={post.title}
            date={post.date}
            slug={post.slug}
            description={post.description}
          />
        );
      })}
    </ul>
  );
}

const truncate = (input, len) => {
  return input.length > len ? `${input.substring(0, len)}...` : input;
};

export function PostItem({ date, slug, description, title }: Omit<Post, "_id" | "body">) {
  return (
    <li>
      <em className="block">{date && date.published ? formatDate(date.published) : "No date"}</em>
      <h4 className="font-subheading font-semibold text-xl md:text-2xl mb-2">
        <Link href={`blog/${slug?.current}`}>{title}</Link>
      </h4>
      <p>{description ? truncate(description, 100) : "No description"}</p>
    </li>
  );
}

export function PostItemLoading({ withYear }: { withYear: boolean }) {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
      {withYear ? <SkeletonText className="w-[12ch] h-[2.5rem]" /> : <div className="w-[12ch]" />}

      <div>
        <SkeletonText className="w-[10ch] max-w-full h-[1rem] mb-3" />
        <SkeletonText className="w-[40ch] max-w-full h-[1.5rem] mb-4" />
        <SkeletonText className="w-[35ch] max-w-full h-[1rem]" />
      </div>
    </div>
  );
}

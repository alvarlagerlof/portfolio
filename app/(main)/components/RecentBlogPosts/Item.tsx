import Link from "next/link";
import { PostPreview } from "types";

export function Item({ title, description, slug }: Omit<PostPreview, "_id" | "date" | "body">) {
  return (
    <li>
      <h4 className="text-xl font-subheading font-semibold mb-1">
        <Link href={`/blog/${slug?.current}`}>{title}</Link>
      </h4>
      <p>{description}</p>
    </li>
  );
}

export function ItemLoading() {
  return (
    <div className="space-y-3">
      <div className="block w-3/5 h-6 bg-skeleton rounded" />
      <div className="block w-full sm:w-4/5 h-4 bg-skeleton rounded" />
    </div>
  );
}

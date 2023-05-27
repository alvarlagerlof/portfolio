import { SkeletonText } from "components/SkeletonText";
import { formatDate } from "lib/formatDate";
import Link from "next/link";
import { Post } from "types";

const truncate = (input, len) => {
  return input.length > len ? `${input.substring(0, len)}...` : input;
};

export function Item({ date, slug, description, title }: Omit<Post, "_id" | "body">) {
  return (
    <li>
      <em className="block">{formatDate(date.published)}</em>
      <h4 className="font-subheading font-semibold text-xl md:text-2xl mb-2">
        <Link href={`blog/${slug?.current}`}>{title}</Link>
      </h4>
      <p>{truncate(description, 100)}</p>
    </li>
  );
}

export function ItemLoading({ withYear }: { withYear: boolean }) {
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

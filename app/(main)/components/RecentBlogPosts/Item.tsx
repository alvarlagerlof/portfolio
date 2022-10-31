"use client";

import Link from "next/link";
import { useRef } from "react";
import { PostPreview } from "types";

export function Item({ post }: { post: PostPreview }) {
  const link = useRef(null);

  return (
    <li
      onClick={e => {
        if (link.current !== e.target) {
          link.current.click();
        }
      }}
      className="cursor-pointer"
    >
      <h4 className="text-xl font-subheading font-semibold mb-1">
        <Link href={`/blog/${post.slug?.current}`} ref={link}>
          {post.title}
        </Link>
      </h4>
      <p>{post.description}</p>
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

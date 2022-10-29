"use client";

import Link from "next/link";
import { useRef } from "react";
import { PostPreview } from "types";

export default function BlogPostItem({ post }: { post: PostPreview }) {
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

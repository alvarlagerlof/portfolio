import Link from "next/link";
import { ReactChild, ReactChildren } from "react";

type ArrowLinkProps = {
  href: string;
  newTab?: boolean;
  children: React.ReactNode | string;
};

export default function ArrowLink({ href, newTab = false, children }: ArrowLinkProps) {
  return (
    <Link href={href} passHref>
      <a
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noreferrer" : ""}
        className="text-primary font-semibold hover:underline"
      >
        {children} →
      </a>
    </Link>
  );
}

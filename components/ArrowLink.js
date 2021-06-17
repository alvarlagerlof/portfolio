import Link from "next/link";

export default function ArrowLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="text-primary hover:underline">{children} →</a>
    </Link>
  );
}

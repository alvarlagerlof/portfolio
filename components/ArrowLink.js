import Link from "next/link";

export default function ArrowLink({ href, children, newTab }) {
  return (
    <Link href={href}>
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

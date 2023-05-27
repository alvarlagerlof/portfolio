"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  name: string;
};

export function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname == href;

  return (
    <li>
      <Link
        href={href}
        className={
          "flex flex-row items-center font-medium py-1 px-3" +
          (active ? " bg-primary text-white rounded-full" : "")
        }
      >
        {name}
      </Link>
    </li>
  );
}

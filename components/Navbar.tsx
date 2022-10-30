import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between !pt-4 !pb-4 space-y-4 md:space-y-0 items-center">
      <Link href="/" passHref>
        <a className="py-2">
          <div className="flex flex-row items-center space-x-2">
            <Image src="/icons/star.svg" width={24} height={24} alt="Star logo" />
            <p className="font-subheading font-medium text-primary text-xl">Alvar Lagerlöf</p>
          </div>
        </a>
      </Link>

      <ul className="flex flex-wrap flex-row justify-center -m-2 md:-m-4">
        <NavLink href="/" name="Home" />
        <NavLink href="/about" name="About" />
        <NavLink href="/projects" name="Projects" />
        <NavLink href="/blog" name="Blog" />
      </ul>
    </nav>
  );
}

type NavLinkProps = {
  href: string;
  name: string;
};

function NavLink({ href, name }: NavLinkProps) {
  const router = useRouter();
  const active = router.pathname == href;

  return (
    <li>
      <Link href={href} passHref>
        <a className="flex flex-row items-center py-2 px-3">
          <span className={"font-medium" + (active ? " text-primary" : "")}>{name}</span>
        </a>
      </Link>
    </li>
  );
}

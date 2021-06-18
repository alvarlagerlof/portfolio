import Link from "next/link";
import Separator from "./Separator";

export default function NavBar() {
  return (
    <>
      <nav className="py-8">
        <ul className="flex flex-row space-x-6">
          <li>
            <Link href="/">
              <a className="flex flex-row space-x-2 items-center">
                <img src="/icons/home.svg" aria-hidden />
                <span className="font-medium">Home</span>
              </a>
            </Link>
          </li>
          <li className="flex flex-row space-x-2 items-center">
            <Link href="/about">
              <a className="flex flex-row space-x-2 items-center">
                <img src="/icons/info.svg" aria-hidden />
                <span className="font-medium">About</span>
              </a>
            </Link>
          </li>
          <li className="flex flex-row space-x-2 items-center">
            <Link href="/projects">
              <a className="flex flex-row space-x-2 items-center">
                <img src="/icons/construction.svg" aria-hidden />
                <span className="font-medium">Projects</span>
              </a>
            </Link>
          </li>
          <li className="flex flex-row space-x-2 items-center">
            <Link href="/blog">
              <a className="flex flex-row space-x-2 items-center">
                <img src="/icons/article.svg" aria-hidden />
                <span className="font-medium">Blog</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <Separator />
    </>
  );
}

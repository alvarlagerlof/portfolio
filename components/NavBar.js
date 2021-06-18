import Link from "next/link";
import { useRouter } from "next/router";

import Separator from "./Separator";

function NavLink({ href, name, icon: Icon }) {
  const router = useRouter();
  const active = router.pathname == href;

  return (
    <li>
      <Link href={href}>
        <a className="flex flex-row space-x-2 items-center">
          <Icon active={active} />
          <span className={"font-medium" + (active ? " text-primary" : "")}>{name}</span>
        </a>
      </Link>
    </li>
  );
}

function IconHome({ active }) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={active ? "#16a34a" : "#000000"}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </svg>
  );
}

function IconAbout({ active }) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={active ? "#16a34a" : "#000000"}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  );
}

function IconProjects({ active }) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={active ? "#16a34a" : "#000000"}
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <rect
            height="8.48"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8717 17.6255)"
            width="3"
            x="16.34"
            y="12.87"
          />
          <path d="M17.5,10c1.93,0,3.5-1.57,3.5-3.5c0-0.58-0.16-1.12-0.41-1.6l-2.7,2.7L16.4,6.11l2.7-2.7C18.62,3.16,18.08,3,17.5,3 C15.57,3,14,4.57,14,6.5c0,0.41,0.08,0.8,0.21,1.16l-1.85,1.85l-1.78-1.78l0.71-0.71L9.88,5.61L12,3.49 c-1.17-1.17-3.07-1.17-4.24,0L4.22,7.03l1.41,1.41H2.81L2.1,9.15l3.54,3.54l0.71-0.71V9.15l1.41,1.41l0.71-0.71l1.78,1.78 l-7.41,7.41l2.12,2.12L16.34,9.79C16.7,9.92,17.09,10,17.5,10z" />
        </g>
      </g>
    </svg>
  );
}

function IconBlog({ active }) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={active ? "#16a34a" : "#000000"}
    >
      <g>
        <rect fill="none" height="24" width="24" />
        <g>
          <path d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
        </g>
        <path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
      </g>
    </svg>
  );
}

export default function NavBar() {
  return (
    <>
      <nav className="py-8">
        <ul className="flex flex-row space-x-6">
          <NavLink href="/" name="Home" icon={IconHome} />
          <NavLink href="/about" name="About" icon={IconAbout} />
          <NavLink href="/projects" name="Projects" icon={IconProjects} />
          <NavLink href="/blog" name="Blog" icon={IconBlog} />
        </ul>
      </nav>
      <Separator />
    </>
  );
}

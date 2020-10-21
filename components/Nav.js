import styled from "styled-components";
import Link from "next/link";

import NavLink from "./NavLink";

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">
        <h2>Alvar Lagerlöf</h2>
      </Link>
      <LinkList>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
      </LinkList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;

  margin: 0 -8px;

  & > li {
    margin: 0 8px;
  }
`;

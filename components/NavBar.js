import styled from "styled-components";

import NavLink from "./NavLink";
import ClickableLink from "./ClickableLink";

export default function NavBar() {
  return (
    <StyledNav>
      <Name>
        <ClickableLink href="/">Alvar Lagerlöf</ClickableLink>
      </Name>
      <LinkList>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
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
  border-bottom: 2px solid black;
  padding-bottom: 32px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Name = styled.div`
  @media screen and (max-width: 700px) {
    & > a {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }
  }
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;

  margin: 0 -8px;

  & > li {
    margin: 0 8px;
  }
`;

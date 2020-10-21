import styled from "styled-components";

import NavLink from "./NavLink";
import ClickableLink from "./ClickableLink";

export default function Nav() {
  return (
    <StyledNav>
      <Name href="/">Alvar Lagerlöf</Name>
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

const Name = styled(ClickableLink)`
  font-weight: 600;
`;

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

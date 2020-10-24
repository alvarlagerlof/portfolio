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
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
      </LinkList>
    </StyledNav>
  );
}

const Name = styled.div`
  @media screen and (max-width: 700px) {
    & > a {
      font-size: 1.8rem;
      margin-bottom: 16px;
      font-weight: 600;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #dedede;
  padding-bottom: 32px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
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

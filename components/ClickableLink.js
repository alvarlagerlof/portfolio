import Link from "next/link";
import styled, { css } from "styled-components";

import { SansSerif } from "./Headings";

export default function ClickableLink({ href, newTab, children, colored }) {
  return (
    <Link href={href} passHref>
      <StyledLink
        colored={colored}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener" : ""}
      >
        {children}
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  margin: -2px -8px;
  border-radius: 8px;
  transition: all 100ms ease-in-out;
  ${SansSerif}
  font-weight: inherit;
  font-size: inherit;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 700px) {
    ${props =>
      props.colored &&
      css`
        border: 2px solid black;
        margin-left: 4px;
        margin-right: 4px;
      `}
  }
`;

import Link from "next/link";
import styled, { css } from "styled-components";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

import { SansSerif } from "./Headings";

export default function ClickableLink({ href, newTab, children, border, copy }) {
  return (
    <div>
      {copy ? (
        <Tooltip title="Copied to clipboard" position="bottom" trigger="click">
          <StyledLink as="button" onClick={() => console.log(href)}>
            {children}
          </StyledLink>
        </Tooltip>
      ) : (
        <Link href={href} passHref>
          <StyledLink
            border={border}
            target={newTab ? "_blank" : "_self"}
            rel={newTab ? "noopener" : ""}
          >
            {children}
          </StyledLink>
        </Link>
      )}
    </div>
  );
}

const StyledLink = styled.a`
  display: inline-block;
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  margin: -2px -8px;
  border-radius: 8px;
  transition: all 100ms ease-in-out;
  font-weight: inherit;
  font-size: inherit;
  ${SansSerif}

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 700px) {
    ${props =>
      props.border &&
      css`
        border: 2px solid black;
        margin-left: 4px;
        margin-right: 4px;
      `}
  }
`;

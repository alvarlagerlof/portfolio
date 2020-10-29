import Link from "next/link";
import styled from "styled-components";

import { Bold, SansSerif } from "./Headings";

export default function CtaLink({ href, newTab, children }) {
  return (
    <Link href={href} passHref>
      <StyledLink target={newTab ? "_blank" : "_self"} rel={newTab ? "noopener" : ""}>
        {children} →
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  ${SansSerif}
  ${Bold}
  text-decoration: none;
  color: ${props => props.theme.accent};

  :hover {
    text-decoration: underline;
  }
`;

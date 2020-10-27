import Link from "next/link";
import styled from "styled-components";

export default function CtaLink({ href, newTab, children }) {
  return (
    <Link href={href} passHref>
      <StyledLink target={newTab ? "_blank" : "_self"}>{children} →</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.accent};
  font-weight: 550;
  font-family: inherit;

  :hover {
    text-decoration: underline;
  }
`;

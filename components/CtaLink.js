import Link from "next/link";
import styled from "styled-components";

export default function CtaLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <StyledLink>{children} →</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
  color: #ff6f00;
  font-weight: 600;

  :hover {
    text-decoration: underline;
  }
`;

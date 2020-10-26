import Link from "next/link";
import styled from "styled-components";

export default function ClickableLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 4px 8px;
  margin: -4px -8px;
  border-radius: 8px;
  transition: all 100ms ease-in-out;
  font-weight: inherit;
  font-family: inherit;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

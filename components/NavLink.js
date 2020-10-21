import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const router = useRouter();

  const isActive = href => {
    return router.pathname.split("/")[1] == href.split("/")[1];
  };

  return (
    <Link href={href} passHref>
      <StyledLink active={isActive(href)}>{children}</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
  color: black;

  ${props =>
    props.active &&
    css`
      color: orange;
    `}
`;

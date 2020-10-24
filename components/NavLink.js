import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import ClickableLink from "./ClickableLink";

export default function NavLink({ href, children }) {
  const router = useRouter();

  const isActive = href => {
    return router.pathname.split("/")[1] == href.split("/")[1];
  };

  return (
    <ClickableLink href={href} passHref>
      <StyledLink active={isActive(href)}>{children}</StyledLink>
    </ClickableLink>
  );
}

const StyledLink = styled.span`
  text-decoration: none;
  color: black;

  ${props =>
    props.active &&
    css`
      font-weight: 600;
    `}
`;

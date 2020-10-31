import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import ClickableLink from "./ClickableLink";

export default function NavLink({ href, children, cta }) {
  const router = useRouter();

  const isActive = href => {
    return router.pathname.split("/")[1] == href.split("/")[1];
  };

  return (
    <ClickableLink border={cta} href={href} passHref>
      <StyledLink cta={cta} active={isActive(href)}>
        {children}
      </StyledLink>
    </ClickableLink>
  );
}

const StyledLink = styled.span`
  text-decoration: none;

  ${props =>
    props.active &&
    css`
      font-weight: 550;
    `}
`;

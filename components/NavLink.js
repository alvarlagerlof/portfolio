import Link from "next/link";

import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

export default function NavLink({ href, children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(window.location.pathname.split("/")[1] == href.split("/")[1]);
  }, []);

  return (
    <StyledLink active={isActive}>
      <Link href={href}>{children}</Link>
    </StyledLink>
  );
}

const StyledLink = styled.div`
  & > a {
    text-decoration: none;
    color: black;

    ${props =>
      props.active &&
      css`
        color: orange;
      `}
  }
`;

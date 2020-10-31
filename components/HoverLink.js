import { useState } from "react";
import styled from "styled-components";

import ClickableLink from "./ClickableLink";

export default function HoverLink({ href, text, hoverText, newTab }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <StyledHoverLink
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <ClickableLink href={href} newTab={newTab}>
        {isHovering ? hoverText : text}
      </ClickableLink>
    </StyledHoverLink>
  );
}

const StyledHoverLink = styled.div`
  display: inline-block;
  & > a {
  }
`;

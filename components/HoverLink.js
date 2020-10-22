import styled, { css } from "styled-components";
import { useState } from "react";

import ClickableLink from "./ClickableLink";

export default function HoverLink({ href, text, hoverText }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <ClickableLink isHovering={isHovering} href={href}>
        {isHovering ? hoverText : text}
      </ClickableLink>
    </div>
  );
}

import styled from "styled-components";
import ClickableLink from "./ClickableLink";

import HoverLink from "./HoverLink";

export default function Footer() {
  return (
    <StyledFooter>
      <SocialList>
        <li>
          <HoverLink
            href="https://twitter.com/alvarlagerlof"
            text="Twitter"
            hoverText="@alvarlagerlof"
          />
        </li>

        <li>
          <HoverLink
            href="https://linkedin.com/in/alvarlagerlof"
            text="LinkedIn"
            hoverText="in/alvarlagerlof"
          />
        </li>

        <li>
          <HoverLink href="mailto:hi@alvar.dev" text="Email" hoverText="hi@alvar.dev" />
        </li>
      </SocialList>
      <GitHub>
        <img src="/github.svg" />
        <ClickableLink href="https://github.com/alvarlagerlof/portfolio">
          View source on GitHub
        </ClickableLink>
      </GitHub>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #dedede;
  padding-top: 64px;
`;

const SocialList = styled.ul`
  list-style-type: none;
  margin: -8px 0;

  & > li {
    margin: 8px 0;
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

const GitHub = styled.div`
  display: flex;
  flex-direction: column;

  & > img {
    margin-bottom: 16px;
  }

  & > a {
    text-align: center;
    max-width: 15ch;
  }
`;

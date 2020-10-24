import styled from "styled-components";
import { useRouter } from "next/router";

import ClickableLink from "./ClickableLink";
import HoverLink from "./HoverLink";
import CtaLink from "./CtaLink";

export default function Footer() {
  const router = useRouter();

  return (
    <StyledFooter>
      {router.pathname.includes("blog/") && (
        <About>
          <img src="/images/profile.jpg" alt="Profile" />
          <p>
            I am Alvar Lagerlöf, an 18 year old developer and designer living in Stockholm, Sweden.
            I like to experiment with code to make cool stuff. To learn more about me you can check
            out the <CtaLink href="/about">about </CtaLink> page. If you'd rather check out some
            stuf I've coded you can go to the <CtaLink href="/projects">projects</CtaLink> page.
          </p>
        </About>
      )}

      <Links>
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
      </Links>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  border-top: 2px solid #dedede;
  padding-top: 64px;
`;

const About = styled.section`
  margin-bottom: 32px;

  & > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 16px;
  }
`;

const Links = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

import styled from "styled-components";
import { useRouter } from "next/router";

import HoverLink from "./HoverLink";
import CtaLink from "./CtaLink";

export default function Footer() {
  const router = useRouter();

  const isBlog = () => router.pathname.includes("blog/");

  return (
    <StyledFooter>
      {isBlog() && (
        <About>
          <Profile src="/profile.jpg" alt="Profile" />
          <p>
            I am Alvar Lagerlöf, an 18 year old developer and designer living in Stockholm, Sweden.
            I like to experiment with code to make cool stuff. To learn more about me you can check
            out the <CtaLink href="/about">about </CtaLink> page. If you'd rather check out some
            things I've made you can go to the <CtaLink href="/projects">projects</CtaLink> page.
          </p>
        </About>
      )}

      <Links>
        <TechInfo>
          <p>
            Hosted on{" "}
            <CtaLink newTab href="https://netlify.com">
              Netlify
            </CtaLink>
          </p>
          <p>
            Statically generated using{" "}
            <CtaLink newTab href="https://nextjs.org">
              Next.js
            </CtaLink>
          </p>
          <p>
            Privacy-friendly analytics via{" "}
            <CtaLink newTab href="https://plausible.io/">
              Plausible
            </CtaLink>
          </p>
        </TechInfo>

        <SocialList>
          <li>
            <HoverLink
              newTab
              href="https://twitter.com/alvarlagerlof"
              text="Twitter"
              hoverText="@alvarlagerlof"
            />
          </li>

          <li>
            <HoverLink
              newTab
              href="https://linkedin.com/in/alvarlagerlof"
              text="LinkedIn"
              hoverText="in/alvarlagerlof"
            />
          </li>

          <li>
            <HoverLink newTab href="mailto:hi@alvar.dev" text="Email" hoverText="hi@alvar.dev" />
          </li>

          <li>
            <HoverLink
              newTab
              href="https://github.com/alvarlagerlof"
              text="Github"
              hoverText="@alvarlagerlof"
            />
          </li>

          <li>
            <HoverLink
              newTab
              href="https://unsplash.com/@alvarlagerlof"
              text="Unsplash"
              hoverText="@alvarlagerlof"
            />
          </li>

          <li>
            <HoverLink
              newTab
              href="https://www.artstation.com/alvarlagerlof"
              text="ArtStation"
              hoverText="@alvarlagerlof"
            />
          </li>
        </SocialList>
      </Links>
      <MadeWithLove>
        Made with <span>❤</span> in Stockholm
      </MadeWithLove>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  border-top: 2px solid black;
  padding-top: 32px;
`;

const About = styled.section`
  margin-bottom: 32px;
`;

const Profile = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const Links = styled.section`
  display: flex;
  flex-direction: reverse;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const SocialList = styled.ul`
  list-style-type: none;
  margin: -8px 0;

  & > li {
    margin: 8px 0;
    font-size: 1.2rem;
    text-align: end;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 16px;

    & > li {
      text-align: start;
    }
  }
`;

const TechInfo = styled.div`
  list-style: none;

  & > p {
    margin-bottom: 16px;
    max-width: 29ch;
  }
`;

const MadeWithLove = styled.p`
  margin-top: 64px;

  & > span {
    color: ${props => props.theme.accent};
  }
`;

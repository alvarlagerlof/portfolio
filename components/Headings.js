import styled, { css } from "styled-components";

const SansSerif = css`
  font-family: "Inter", sans-serif;
`;

const Serif = css`
  font-family: "PT Serif", serif;
`;

const Thin = css`
  font-weight: 400;
`;

const Bold = css`
  font-weight: 550;
`;

const Title = styled.h1`
  ${Serif}
  ${Thin}
  margin-bottom: 32px;
  font-size: 3.2rem;

  @media screen and (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  ${SansSerif}
  ${Thin}
  line-height: 1.5;
  font-size: 1.5rem;
  margin-bottom: 24px;

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

const Heading = styled.h3`
  ${Bold}
  ${SansSerif}
  font-size: 2rem;
  margin-bottom: 8px;

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

const Subheading = styled.h4`
  ${Bold}
  ${SansSerif}
  font-size: 1.2rem;
`;

const Caption = styled.h4`
  ${Thin}
  ${SansSerif}
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.1rem;
`;

export { Title, Subtitle, Heading, Subheading, Caption };

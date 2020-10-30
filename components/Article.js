import styled from "styled-components";

import { Serif, SansSerif, Bold } from "./Headings";

const Article = styled.article`
  margin: 64px 0;

  & h3,
  & h4,
  & h5 {
    ${Bold}
    ${SansSerif}
    margin-top: 48px;
    margin-bottom: 8px;
  }

  & h3 {
    font-size: 2rem;
  }

  & h4 {
    font-size: 1.6em;
  }

  & h5 {
    font-size: 1.3rem;
  }

  & p + p {
    margin-top: 16px;
  }

  & strong {
    ${Bold}
  }

  & > ul,
  & > ol {
    margin: 32px 24px;
  }

  & > ul ul,
  & > ol ol {
    margin: 8px 24px;
  }

  & ul li,
  & ol li {
    margin-bottom: 16px;
  }

  & img {
    display: block;
    margin: 64px auto;
    max-width: 100%;
    max-height: 500px;
    border-radius: 8px;
  }

  & blockquote {
    margin: 32px 0;
    padding: 8px 24px;
    border-left: 4px solid ${props => props.theme.accent};

    & p {
      ${Serif}
      margin: 0;
      font-size: 1.3rem;
    }

    & strong {
      font-size: 1rem;
      display: block;
      margin-top: 20px;
    }
  }

  & p code {
    background: #e6e6e6;
    border-radius: 4px;
    padding: 2px 4px;
    margin: -2px 0px;
  }

  /* for <pre> see customStyles on the syntax highlighter */
`;

export default Article;

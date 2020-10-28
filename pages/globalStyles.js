import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter var';
        font-weight: 400 600;
        font-display: swap;
        font-style: normal;
        font-named-instance: 'Regular';
        src: url("/fonts/Inter-roman.var.woff2?v=3.15") format("woff2");
    }

    @font-face {
        font-family: 'Inter var';
        font-weight: 400 600;
        font-display: swap;
        font-style: italic;
        font-named-instance: 'Italic';
        src: url("/fonts/Inter-italic.var.woff2?v=3.15") format("woff2");
    }

       
    @font-face {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/Pt-Serif-regular-latin.woff2") format("woff2");
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    h1, h2 {
        font-family: "PT Serif", serif;
        font-weight: 500;
    }

    h1 {
        font-size: 3.2rem;
    }

    h2 {
        font-size: 2.2rem;
    }

    h3, h4 {
        font-weight: 600;
    }

    h3 {
        font-size: 1.3rem;
    }

    h4 {
        font-size: 1.1rem;
    }

    p, em, strong, a {
        line-height: 1.5;
        font-size: 1.1em;
    }

    @media screen and (max-width: 700px) {
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.3rem;
        }

        p, em, strong, a {
            font-size: 1em
        }
    }
`;

export default GlobalStyle;

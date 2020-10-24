import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    h1 {
        font-size: 3.2rem;
    }

    h2 {
        font-size: 2.2rem;
    }

    h3 {
        font-size: 1.3rem;
    }

    h4 {
        font-size: 1.1rem;
    }

    p, em, strong, a {
        line-height: 1.5;
        font-size: 1.1em
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

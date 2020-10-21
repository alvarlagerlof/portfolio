import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    h4 {
        font-size: 1rem;
    }
`;

export default GlobalStyle;

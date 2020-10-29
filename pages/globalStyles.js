import { createGlobalStyle } from "styled-components";
import { SansSerif } from "../components/Headings";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        font-weight: 400 550;
        font-display: swap;
        font-style: normal;
        font-named-instance: 'Regular';
        src: url("/fonts/Inter-roman.var.woff2?v=3.15") format("woff2");
    }

    @font-face {
        font-family: 'Inter';
        font-weight: 400 550;
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
    }

    p, em, strong, li {
        ${SansSerif}
        line-height: 1.5;
    }

`;

export default GlobalStyle;

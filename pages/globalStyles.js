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
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        ${SansSerif}
       
    }

    p, em, strong, li, button {
        line-height: 1.5;
    }

`;

export default GlobalStyle;

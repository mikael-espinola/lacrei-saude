"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
     * {
        padding: 0;
        margin: 0 ;
        box-sizing: border-box;
     }
    body {
        background-color: blue;
        height: 100vh;
    }
`;

export default GlobalStyles;
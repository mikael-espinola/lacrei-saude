"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap');

     * {
        padding: 0;
        margin: 0 ;
        box-sizing: border-box;
     }
    body {
        background-color: #fff;
        height: 100vh;
    }

    .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: 400;
    font-style: normal;
    font-size: 24px; /* Default size */
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`;

export default GlobalStyles;

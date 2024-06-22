"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    

     * {
        padding: 0;
        margin: 0 ;
        box-sizing: border-box;
     }
    body {
        background-color: ${(props) =>
          props.theme.colors["$background-default"]};
        height: 100%;
        width: 100%;
    }


`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

:root{
    --color-bg: #EBECF0;
    --hover-color: #77C3EC;
    --container-width-lg: 95%;
    --container-width-md: 85%;
    --container-width-sm: 75%
}

body{
    background: var(--color-bg);
    /* background: black; */
}
`
export default GlobalStyles;
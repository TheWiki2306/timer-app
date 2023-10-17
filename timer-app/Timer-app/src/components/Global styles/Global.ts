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
    --container-width-lg: 80%;
    --container-width-md: 60%;
    --container-width-sm: 40%
}

body{
    background: var(--color-bg);
    /* background: black; */
}

.container{
    width: var(--container-width-lg);
    margin: 0 auto;
}
`
export default GlobalStyles;
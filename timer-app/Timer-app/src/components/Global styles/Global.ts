import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

:root{
    --color-bg: #cccc99;
    --txt-color: brown;
    --hover-color: #77C3EC;
    --container-width-lg: 80%;
    --container-width-md: 60%;
    --container-width-sm: 40%
}

body{
    background: var(--color-bg);
    /* background: black; */
    margin-top: 0.5rem;
    color: var(--txt-color);
}

.container{
    width: var(--container-width-lg);
    margin: 0 auto;
}
`
export default GlobalStyles;
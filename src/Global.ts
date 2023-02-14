import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --title-size: 6rem;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    background-size: cover;
}
:focus{
    outline: 0;
    box-shadow: 2px 2px 2px 1px #537FE7;
}
`

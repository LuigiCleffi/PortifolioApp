import {createGlobalStyle} from "styled-components";
import bgImage from "../src/images/subtle-prism.svg"

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
    background-image: url(${bgImage});
    background-color: rgb(15, 22, 36);
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    background-size: cover;
}
`
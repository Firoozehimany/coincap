import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
        font-family: "Lato", Arial, Helvetica, "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #f5f5f5;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    *, *:after, *:before {
    box-sizing: border-box;
    }

    .container {
        max-width: 1128px;
        margin: 0 auto;
    }

    table {
        table-layout: auto;
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        padding: 1px;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 30%) 0px 2px 15px;
        background: #f5f5f5;
    }
`;
export default GlobalStyle;
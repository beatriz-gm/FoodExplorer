import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.DARK400};

    -webkit-font-smoothing: antialiased;
  }

  body, input, input:placeholder {
    font-family: 'Roboto Slab', serif;
  }

  button, h1, h2 {
    font-family: "Poppins", serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }
  
`;
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100vh;
  }
  body {
    background: #f5f5f5;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input, button {
    outline: none;
  }
`;
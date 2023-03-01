import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin:0px;
    padding:0px;
  }

  body {
    font-family: 'Pretendard';
    font-style: normal;
  }
`;

export default GlobalStyle;

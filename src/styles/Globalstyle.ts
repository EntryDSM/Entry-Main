import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { 
    font-family: 'Pretendard';
    font-style: normal;
    box-sizing: border-box;
    margin:0px;
    padding:0px;
  }
`;

export default GlobalStyle;

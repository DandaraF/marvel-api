import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
body{
    width: 100%;
    background-color: ${({ theme }) => theme.palette.background.modal};
    color: ${({ theme }) => theme.palette.background.de};
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

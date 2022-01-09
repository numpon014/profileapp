import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 14px;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
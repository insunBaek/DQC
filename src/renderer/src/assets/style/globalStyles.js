// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareRound';
    src: url('./font/NanumSquareRoundB.ttf') format('truetype');
  }

  body {
    font-family: "NanumSquareRound";
  }

  /* Colors */
  :root {
    --color-error: #ff0000;
    --color-error-cursor: #cc0000;
    --color-warning: #ffc107;
    --color-warning-cursor: #ff9900;
    --color-info: #007bff;
    --color-info-cursor: #0056b3;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`

export default GlobalStyle

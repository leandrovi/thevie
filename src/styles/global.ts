import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import palette from '@/styles/palette';

export default createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312e38;
    color: ${palette.grayShades.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  /* h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  } */

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

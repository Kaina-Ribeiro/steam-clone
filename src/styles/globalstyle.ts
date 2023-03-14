import { Roboto } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
  }

  body, input, textarea, button {
    font-family: ${roboto.style.fontFamily};
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;

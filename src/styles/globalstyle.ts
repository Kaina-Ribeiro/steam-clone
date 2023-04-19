import { Merriweather } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const merriweather = Merriweather({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  border: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: ${merriweather.style.fontFamily}, sans-serif;
}

  :focus {
    outline: 0;
  }

  html,
  body,
  #__next {
    overflow: hidden;
  }

  html,
  body {
    ul {
      list-style-type: none;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;

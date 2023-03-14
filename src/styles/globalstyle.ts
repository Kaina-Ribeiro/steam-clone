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
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  font-family: ${merriweather.style.fontFamily}, sans-serif;
}

  :focus {
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html,
  body {
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default GlobalStyle;

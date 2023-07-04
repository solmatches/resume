import { css, Global, Theme, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React, { FC, useState } from 'react';

import { THEME_COLOR } from './constants';

type ThemeType = keyof typeof THEME_COLOR;

interface Props {
  fallback?: React.ReactElement;
}

const reset = (theme: Theme) => css`
  html,
  body,
  div#root {
    width: 100%;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.15;
  }
  body {
    -webkit-touch-callout: none;
    overflow: hidden;
    overflow-y: scroll;
    margin: 0;
    background: ${theme.color.mono0};
    color: ${theme.color.mono4};
    font-family: ${`-apple-system, "Noto Sans KR", sans-serif`};
    font-size: 1.6rem;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  ol,
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a,
  button {
    padding: 0;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    background-color: transparent;
  }

  input,
  textarea {
    box-shadow: none;
    -webkit-user-select: auto;
    -moz-user-select: text;
    user-select: text;
  }

  *,
  *:before,
  *:after {
    -webkit-tap-highlight-color: transparent;
    box-sizing: inherit;
  }
  *:focus {
    outline: none !important;
  }
`;

export const ThemeContext = React.createContext<{
  theme: ThemeType;
  toggle?: () => void;
}>({ theme: 'light' });

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [browserTheme, setBrowserTheme] = useState<ThemeType>(initialBrowserTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme: browserTheme,
        toggle: () => changeTheme(browserTheme),
      }}
    >
      <EmotionThemeProvider theme={{ color: THEME_COLOR[browserTheme] }}>
        <Global styles={reset} />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );

  function changeTheme(theme: 'light' | 'dark') {
    const changeValue = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('browser_theme', changeValue);
    setBrowserTheme(changeValue);
  }

  function initialBrowserTheme(): ThemeType {
    let browserTheme = window.localStorage.getItem('browser_theme') as ThemeType | null;
    const INVALID_THEME = browserTheme !== 'light' && browserTheme !== 'dark';

    if (!browserTheme || INVALID_THEME) {
      const { matches: isDarkMode } = window.matchMedia('(prefers-color-scheme: dark)');
      browserTheme = isDarkMode ? 'dark' : 'light';
    }
    return browserTheme;
  }
};

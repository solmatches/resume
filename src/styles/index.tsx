import {
    css,
    Global,
    Theme,
    ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
// import FontFaceObserver from 'fontfaceobserver';
import React, { FC, useEffect, useState } from 'react';

import { THEME_COLOR } from './constants';

type ThemeType = keyof typeof THEME_COLOR;

interface Props {
    fallback?: React.ReactElement;
}

const FONT_FAMILIES = ['-apple-system', '"Noto Sans KR"', 'sans-serif'];

const initialBrowserTheme = (): ThemeType => {
    let browserTheme = window.localStorage.getItem(
        'browser_theme',
    ) as ThemeType | null;
    const INVALID_THEME = browserTheme !== 'light' && browserTheme !== 'dark';

    if (!browserTheme || INVALID_THEME) {
        const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
        browserTheme = matches ? 'dark' : 'light';
    }
    return browserTheme;
};

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
        color: ${theme.color.mono3};
        font-family: ${FONT_FAMILIES.join(', ')};
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

// const FONT_LOAD_TIMEOUT = 800;

export const ThemeProvider: FC<Props> = ({ children }) => {
    // const [loading, setLoading] = useState(false);
    const [browserTheme, setBrowserTheme] =
        useState<ThemeType>(initialBrowserTheme);

    useEffect(() => {
        // const notoSans = new FontFaceObserver('Noto Sans KR');
        // notoSans
        //     .load(null, FONT_LOAD_TIMEOUT)
        //     .then(() => {
        //         setLoading(true);
        //     })
        //     .catch(() => {
        //         setLoading(true);
        //         console.error('폰트 로딩 실패');
        //     });
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme: browserTheme,
                toggle: () => {
                    const changeValue =
                        browserTheme === 'light' ? 'dark' : 'light';
                    window.localStorage.setItem('browser_theme', changeValue);
                    setBrowserTheme(changeValue);
                },
            }}
        >
            <EmotionThemeProvider theme={{ color: THEME_COLOR[browserTheme] }}>
                <Global styles={reset} />
                {children}
            </EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};

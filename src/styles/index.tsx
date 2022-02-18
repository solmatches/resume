import {
    css,
    Global,
    Theme,
    ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import FontFaceObserver from 'fontfaceobserver';
import React, { FC, useEffect, useState } from 'react';
import { useRef } from 'react';
import { THEME_COLOR } from './constants';
import { notoSansFontFamily, notoSansKrFontFamily } from './font';

type ThemeType = keyof typeof THEME_COLOR;

interface Props {
    fallback: React.ReactElement;
}

const FONT_FAMILIES = ['-apple-system', '"Noto Sans"', 'sans-serif'];

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
        font-family: ${FONT_FAMILIES.join(',')};
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
        user-select: none;
    }
    ol,
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
        user-select: none;
    }
    a {
        color: inherit;
        text-decoration: none;
        user-select: none;
    }
    a,
    button {
        padding: 0;
        border: none;
        outline: none;
        font-family: inherit;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }
    html,
    body,
    div,
    span,
    nav,
    header,
    footer,
    menu,
    main,
    table,
    thead,
    tbody,
    tfoot,
    tr,
    td,
    th,
    form,
    label {
        user-select: none;
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

    ${notoSansFontFamily}
    ${notoSansKrFontFamily}
`;

export const ThemeContext = React.createContext<{
    theme: ThemeType;
    toggle?: () => void;
}>({ theme: 'light' });

export const ThemeProvider: FC<Props> = ({ fallback, children }) => {
    let { current: globalFontLoading } = useRef(true);
    const [isLoading, setIsLoading] = useState(globalFontLoading);
    const [browserTheme, setBrowserTheme] =
        useState<ThemeType>(initialBrowserTheme);

    useEffect(() => {
        if (isLoading) {
            const notoSans = new FontFaceObserver('Noto Sans');
            const notoSansMedium = new FontFaceObserver('Noto Sans Medium');
            const notoSansRegular = new FontFaceObserver('Noto Sans Regular');

            Promise.all([
                notoSans.load(),
                notoSansMedium.load(),
                notoSansRegular.load(),
            ]).then(() => {
                globalFontLoading = false;
                setIsLoading(false);
            });
        }
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
                {isLoading && fallback}
                {children}
            </EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};

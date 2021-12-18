import { css, Global } from '@emotion/react';
import FontFaceObserver from 'fontfaceobserver';
import React, { FC, useEffect, useState } from 'react';
import { useRef } from 'react';
import { THEME_COLOR } from './constants';
import { notoSansFontFamily, notoSansKrFontFamily } from './font';

interface Props {
    fallback: React.ReactElement;
}

const FONT_FAMILIES = ['-apple-system', '"Noto Sans"', 'sans-serif'];

const styles = () => css`
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
        overflow-y: scroll;
        margin: 0;
        background: ${THEME_COLOR.mono0};
        color: ${THEME_COLOR.mono3};
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

export const GlobalStyles: FC<Props> = ({ fallback, children }) => {
    let { current: globalFontLoading } = useRef(false);
    const [isLoading, setIsLoading] = useState(globalFontLoading);

    useEffect(() => {
        if (isLoading) {
            const notoSans = new FontFaceObserver('Noto Sans');

            notoSans.load().then(() => {
                globalFontLoading = false;
                setIsLoading(false);
            });
        }
    }, []);

    if (isLoading) {
        return (
            <>
                <Global styles={styles} />
                {fallback}
            </>
        );
    }

    return (
        <>
            <Global styles={styles} />
            {children}
        </>
    );
};

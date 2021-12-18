import { css } from '@emotion/react';

import regularWoff from './assets/font/NotoSansCJKkr-Regular.woff';
import regularWoff2 from './assets/font/NotoSansCJKkr-Regular.woff2';
import lightKrWoff from './assets/font/NotoSansCJKkr-Light.woff';
import lightKrWoff2 from './assets/font/NotoSansCJKkr-Light.woff2';
import lightWoff from './assets/font/NotoSans-Light.woff';
import lightWoff2 from './assets/font/NotoSans-Light.woff2';
import mediumWoff from './assets/font/NotoSans-Medium.woff';
import mediumWoff2 from './assets/font/NotoSans-Medium.woff2';

export const notoSansKrFontFamily = css`
    @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${lightKrWoff2}') format('woff2'),
            url('${lightKrWoff}') format('woff');
    }
    @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('${regularWoff2}') format('woff2'),
            url('${regularWoff}') format('woff');
    }
    @font-face {
        font-family: 'Noto Sans Regular';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('${regularWoff2}') format('woff2'),
            url('${regularWoff}') format('woff');
    }
`;

export const notoSansFontFamily = css`
    @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${lightWoff2}') format('woff2'),
            url('${lightWoff}') format('woff');
        unicode-range: U+0020-007E;
    }
    @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('${mediumWoff2}') format('woff2'),
            url('${mediumWoff}') format('woff');
        unicode-range: U+0020-007E;
    }
    @font-face {
        font-family: 'Noto Sans Medium';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('${mediumWoff2}') format('woff2'),
            url('${mediumWoff}') format('woff');
        unicode-range: U+0020-007E;
    }
`;

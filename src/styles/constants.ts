function toMediaQuery(size: string): string {
    return `@media (max-width: ${size})`;
}

export const THEME_Z_INDEX = {
    header: 100,
    modal: 200,
} as const;

export const THEME_SIZE = {
    contentMaxWidth: '1032px',
    tabletWidth: '768px',
    mobileWidth: '359px',
} as const;

export const THEME_MEDIA_QUERY = {
    tablet: toMediaQuery(THEME_SIZE.tabletWidth),
    mobile: toMediaQuery(THEME_SIZE.mobileWidth),
};

export const THEME_COLOR = {
    light: {
        primary: '#bb5409',
        mono0: '#ffffff',
        mono1: '#f0f0f0',
        mono2: '#666666',
        mono3: '#121212',
    },
    dark: {
        primary: 'tomato',
        mono3: '#ffffff',
        mono2: '#f0f0f0',
        mono1: '#666666',
        mono0: '#121212',
    },
} as const;

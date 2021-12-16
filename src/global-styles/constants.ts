function toMediaQuery(size: string): string {
    return `@media (max-width: ${size})`;
}

export const THEME_Z_INDEX = {
    header: 100,
};

export const THEME_SIZE = {
    contentMaxWidth: '1200px',
    tabletWidth: '768px',
    mobileWidth: '359px',
};

export const THEME_MEDIA_QUERY = {
    tablet: toMediaQuery(THEME_SIZE.tabletWidth),
    mobile: toMediaQuery(THEME_SIZE.mobileWidth),
};

export const THEME_COLOR = {
    primary: '#bb5409',
    mono0: '#ffffff',
    mono1: '#f0f0f0',
    mono2: '#666666',
    mono3: '#121212',
};

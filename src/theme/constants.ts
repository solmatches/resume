function toMediaQuery(size: string): string {
  return `@media (min-width: ${size})`;
}
export const THEME_Z_INDEX = {
  header: 100,
  modal: 200,
} as const;

export const THEME_SIZE = {
  contentMaxWidth: '900px',
  medium: '961px',
  large: '1280px',
  Xlarge: '1920px',
} as const;

export const THEME_MEDIA_QUERY = {
  medium: toMediaQuery(THEME_SIZE.medium),
  large: toMediaQuery(THEME_SIZE.large),
  Xlarge: toMediaQuery(THEME_SIZE.Xlarge),
};

export const THEME_COLOR = {
  light: {
    primary: '#bb5409',
    mono0: '#ffffff',
    mono1: '#f0f0f0',
    mono2: '#666666',
    mono3: '#323232',
    mono4: '#121212',
  },
  dark: {
    primary: '#e99d66',
    mono0: '#121212',
    mono1: '#323232',
    mono2: '#a5a5a5',
    mono3: '#d1d1d1',
    mono4: '#ffffff',
  },
} as const;

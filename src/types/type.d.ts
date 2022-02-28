import '@emotion/react';

import { THEME_COLOR } from '~/theme/constants';

type ValueOfUnion<T> = T extends { [k: T]: keyof T } ? T[keyof T] : undefined;

declare module '@emotion/react' {
    export interface Theme {
        color: ValueOfUnion<typeof THEME_COLOR>;
    }
}

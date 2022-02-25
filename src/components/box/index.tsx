import { Theme } from '@emotion/react';
import { Interpolation } from '@emotion/styled';
import { ElementType, FC } from 'react';

interface Props {
    component?: ElementType;
    style?: Interpolation<Theme>;
}

export const Box: FC<Props> = ({ component = 'div', style, children }) => {
    const Component = component;

    const styleProps = (theme: Theme) =>
        typeof style === 'function' ? style(theme) : style;

    return (
        <Component css={(theme: Theme) => styleProps(theme)}>
            {children}
        </Component>
    );
};

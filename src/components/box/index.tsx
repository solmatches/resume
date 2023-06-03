import { Theme } from '@emotion/react';
import { Interpolation } from '@emotion/styled';
import { ComponentType, HTMLProps, ReactNode } from 'react';

interface Props<T> {
    children: ReactNode;
    as?: ComponentType<HTMLProps<T>> | string;
    style?: Interpolation<Theme>;
}

export const Box = <T,>({
    as: Component = 'div',
    style,
    children,
}: Props<T>) => {
    const styleProps = (theme: Theme) =>
        typeof style === 'function' ? style(theme) : style;

    return (
        <Component css={(theme: Theme) => styleProps(theme)}>
            {children}
        </Component>
    );
};

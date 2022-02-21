import { css, useTheme } from '@emotion/react';
import React, { FC, MouseEvent, useCallback } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface Props {
    to: string;
    target?: string;
    navigate?: boolean;
}

const activeStyle = (isActive: boolean) => css`
    &:after {
        content: '';
        display: block;
        width: ${isActive ? '100%' : '0%'};
        padding-top: 4px;
        border-bottom: 2px solid #121212;
        transition: width 0.3s, opacity 0.3s;
    }
`;

const style = (isNavigate: boolean, isActive: boolean) => {
    const theme = useTheme();

    if (isNavigate) {
        return css`
            &:hover {
                opacity: 0.8;
            }
            ${activeStyle(isActive)}
        `;
    }
    return css`
        color: ${theme.color.mono3};
        &:hover {
            color: ${theme.color.primary};
        }
    `;
};

export const Link: FC<Props> = ({
    to,
    navigate: navigateProps = false,
    children,
    ...props
}) => {
    const navigate = useNavigate();
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
        if (navigateProps) {
            event.preventDefault();
            window.scrollTo({ top: 0 });
            navigate(to);
        }
    }, []);

    return (
        <a
            {...props}
            href={to}
            css={style(navigateProps, !!match)}
            onClick={handleClick}
        >
            {children}
        </a>
    );
};

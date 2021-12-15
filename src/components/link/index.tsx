/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { FC, useCallback, MouseEvent } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface Props {
    to: string;
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

const linkStyle = css`
    &:hover {
        opacity: 0.8;
    }
`;

export const Link: FC<Props> = ({ to, children }) => {
    const navigate = useNavigate();
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        navigate(to);
    }, []);

    return (
        <a
            href={to}
            css={[linkStyle, activeStyle(!!match)]}
            onClick={handleClick}
        >
            {children}
        </a>
    );
};

import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
    color?: keyof Theme['color'];
    small?: boolean;
}

export const Text = styled.span<Props>`
    ${({ theme, color }) =>
        color &&
        css`
            color: ${theme.color[color]};
        `}
    ${({ small }) =>
        small &&
        css`
            font-size: 1.4rem;
        `}
`;

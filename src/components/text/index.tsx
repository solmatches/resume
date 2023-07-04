import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { memo } from 'react';

interface Props {
  color?: keyof Theme['color'];
  small?: boolean;
}

export const Text = memo(styled.span<Props>`
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
`);

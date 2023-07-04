import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  row?: boolean;
  flex?: number | string;
  gap?: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: ${({ row = 'column' }) => row};
  flex-wrap: wrap;
  flex: ${({ flex = 1 }) => flex};
  max-width: 100%;
  box-sizing: border-box;

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}rem;
    `}
`;

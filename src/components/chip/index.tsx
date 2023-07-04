import styled from '@emotion/styled';

export const Chip = styled.div`
  display: inline-block;
  padding: 0.5em 0.8em;
  border-radius: 1em;
  background: ${({ theme }) => theme.color.mono1};
  font-size: 1.2rem;
  transition: transform 0.3s;
`;

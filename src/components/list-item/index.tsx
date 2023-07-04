import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;

  &::before {
    content: '';
    flex-shrink: 0;
    display: inline-block;
    width: 0.25em;
    height: 0.25em;
    margin-right: 0.6em;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.primary};
  }
`;

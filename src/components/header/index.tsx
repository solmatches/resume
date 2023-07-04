import styled from '@emotion/styled';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { THEME_SIZE, THEME_Z_INDEX } from '~/theme/constants';

import { Logo } from '../logo';

const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${THEME_Z_INDEX.header};
  background: ${({ theme }) => theme.color.mono0};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${THEME_SIZE.contentMaxWidth};
  margin: 0 auto;
  padding: 1rem 1.6rem;
`;

export const Header: FC = () => {
  return (
    <HeaderComponent>
      <Wrapper>
        <h1>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </h1>
      </Wrapper>
    </HeaderComponent>
  );
};

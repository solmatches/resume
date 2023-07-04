import styled from '@emotion/styled';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { ThemeSwitch } from '~/components';
import { useAnalytics } from '~/hooks/use-analytics';
import { THEME_SIZE } from '~/theme/constants';

import Main from './main';

const Content = styled.main`
  width: 100%;
  max-width: ${THEME_SIZE.contentMaxWidth};
  margin: 0 auto;
`;

const Pages: FC = () => {
  useAnalytics();

  return (
    <Content>
      <ThemeSwitch />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Content>
  );
};

export default Pages;

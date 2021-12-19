import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Header } from '~/components';
import { THEME_MEDIA_QUERY, THEME_SIZE } from '~/styles/constants';
import Career from './career';
import Main from './main';

const Content = styled.main`
    width: 100%;
    max-width: ${THEME_SIZE.contentMaxWidth};
    margin: 0 auto;
    padding-top: 100px;

    ${THEME_MEDIA_QUERY.tablet} {
        > section {
            padding: 2.2rem 2.2rem 5rem;
        }
    }
`;

const Pages: FC = () => {
    return (
        <>
            <Header />
            <Content>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Content>
        </>
    );
};

export default Pages;

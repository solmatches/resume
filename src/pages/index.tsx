import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Header } from '~/components';
import Main from './main';

const Content = styled.main`
    height: 100%;
    padding-top: 100px;
    overflow: hidden;
    overflow-y: auto;
`;

const Pages: FC = () => {
    return (
        <>
            <Header />
            <Content>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/career" element={<>경력기술</>} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Content>
        </>
    );
};

export default Pages;

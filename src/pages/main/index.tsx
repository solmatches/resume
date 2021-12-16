import styled from '@emotion/styled';
import React, { FC } from 'react';
import Profile from './profile';
import Skills from './skills';

const Wrapper = styled.section`
    padding: 1.6rem;

    h1 {
        margin-bottom: 2rem;
    }
`;

const Main: FC = () => {
    return (
        <Wrapper>
            <h1>김소라 | Frontend Developer</h1>
            <p>사용자와 서비스의 정서적 유대를 추구하는 개발자</p>
            <Profile />
            <Skills />
        </Wrapper>
    );
};

export default Main;

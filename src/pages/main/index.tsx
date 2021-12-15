import styled from '@emotion/styled';
import React, { FC } from 'react';
import Profile from './profile';

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
            <p>사용자와 감정적 유대를 추구하는 개발자</p>
            <Profile />
        </Wrapper>
    );
};

export default Main;

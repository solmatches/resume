import styled from '@emotion/styled';
import React, { FC } from 'react';
import { THEME_COLOR, THEME_MEDIA_QUERY } from '~/styles/constants';
import Profile from './profile';
import Skills from './skills';

const Wrapper = styled.section`
    padding: 1.6rem;
`;

const Title = styled.h1`
    margin-bottom: 2rem;

    ${THEME_MEDIA_QUERY.tablet} {
        display: none;
    }
`;

const MobileTitle = styled.h1`
    display: none;

    ${THEME_MEDIA_QUERY.tablet} {
        display: inline-block;
        margin-bottom: 2rem;
        padding-bottom: 0.5em;
        border-bottom: 2px solid ${THEME_COLOR.mono3};

        span {
            display: block;
            font-size: 0.8em;
            line-height: 1.5;
        }
    }
`;

const Main: FC = () => {
    return (
        <Wrapper>
            <Title>김소라 | Frontend Developer</Title>
            <MobileTitle>
                김소라
                <span>Frontend Developer</span>
            </MobileTitle>
            <p>사용자와 서비스의 정서적 유대를 추구하는 개발자</p>
            <Profile />
            <Skills />
        </Wrapper>
    );
};

export default Main;

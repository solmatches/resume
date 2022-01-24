import styled from '@emotion/styled';
import React, { FC } from 'react';
import { THEME_COLOR, THEME_MEDIA_QUERY } from '~/styles/constants';
import { Introduce } from './introduce';
import Profile from './profile';
import Skills from './skills';

const Wrapper = styled.section`
    padding: 1.6rem 1.6rem 8rem;

    article + article {
        padding-top: 2em;
        border-top: 1px solid ${THEME_COLOR.mono1};
    }
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
            <p>사용자로부터 성장의 즐거움을 찾는 개발자</p>
            <Profile />
            <Skills />
            <Introduce />
        </Wrapper>
    );
};

export default Main;

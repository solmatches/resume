import styled from '@emotion/styled';
import { FC } from 'react';

import { THEME_MEDIA_QUERY } from '~/styles/constants';

import Career from './career';
import { Introduce } from './introduce';

const Main: FC = () => {
    return (
        <Wrapper>
            <Introduce />
            <Career />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 8rem 3rem;
    line-height: 1.4;

    h1 {
        display: inline-block;
        padding-bottom: 0.5em;
        border-bottom: 2px solid ${({ theme }) => theme.color.mono4};
        line-height: 1.5;
    }

    ${THEME_MEDIA_QUERY.medium} {
        padding: 5rem 2.2rem;
    }
`;

export default Main;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';

import { Chips } from '~/components';

const SKILLS: string[] = [
    'React',
    'Typescript',
    'Storybook',
    'Emotion',
    'Vue.js',
    'Next.js',
    'Redux',
    'Mobx',
    'Rollup',
];

const chip = css`
    > div:hover {
        transform: scale(1.15);
    }
`;
const Wrapper = styled.article`
    margin-top: 5rem;
`;
const Subject = styled.h2`
    margin-bottom: 2rem;
    font-size: 1.2em;
`;

const Skills: FC = () => {
    return (
        <Wrapper>
            <Subject>Skills</Subject>
            <Chips chips={SKILLS} css={chip} />
        </Wrapper>
    );
};

export default Skills;

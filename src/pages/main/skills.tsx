import styled from '@emotion/styled';
import React, { FC } from 'react';
import { THEME_COLOR } from '~/global-styles/constants';

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

const Wrapper = styled.article`
    margin-top: 4rem;
`;
const Subject = styled.h2`
    margin-bottom: 2rem;
    font-size: 1.2em;
`;
const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`;

const Chip = styled.div`
    display: inline-block;
    padding: 0.5em 0.8em;
    border-radius: 1em;
    background: ${THEME_COLOR.mono1};
    font-size: 1.2rem;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.15);
    }
`;

const Skills: FC = () => {
    return (
        <Wrapper>
            <Subject>Skills</Subject>
            <Chips>
                {SKILLS.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                ))}
            </Chips>
        </Wrapper>
    );
};

export default Skills;

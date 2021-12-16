import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Chips } from '~/components';

interface Props {
    title: string;
    skills: string[];
    workDescription: string[];
    serviceDescription?: string[];
}

const Wrapper = styled.li`
    margin: 2rem 0;
    list-style: disc;
    line-height: 1.5;
`;

const SubTitle = styled.p`
    margin: 1.5em 0 0.5em;
    font-size: 1.4rem;
    font-weight: 600;
`;

const ListItem = styled.div`
    display: flex;
    align-items: flex-start;
    line-height: 1.5;

    &::before {
        content: '-';
        display: inline-block;
        padding-right: 0.4em;
    }
`;

const Project: FC<Props> = ({
    title,
    serviceDescription,
    workDescription,
    skills,
    children,
}) => {
    return (
        <Wrapper>
            <strong>{title}</strong>
            {children}
            {serviceDescription &&
                serviceDescription.map((desc) => (
                    <ListItem key={desc}>{desc}</ListItem>
                ))}
            <SubTitle>개발 환경</SubTitle>
            <Chips
                chips={skills}
                css={css`
                    margin: 1rem 0 2rem;
                `}
            />
            {workDescription.map((desc) => (
                <ListItem key={desc}>{desc}</ListItem>
            ))}
        </Wrapper>
    );
};

export default Project;

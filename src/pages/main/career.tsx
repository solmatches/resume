import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

import {
    Box,
    Container as ContainerComponent,
    ListItem,
    Text,
} from '~/components';
import { THEME_MEDIA_QUERY } from '~/theme/constants';

import { careers, skills } from './contents';

type Career = typeof careers[number];

const Projects: FC<{ projects: Career['projects'] }> = ({ projects }) => {
    return (
        <Box
            style={css`
                flex: 2;
            `}
        >
            {projects.map(({ title, period, description, works, skills }) => (
                <Box
                    key={title}
                    style={css`
                        ${THEME_MEDIA_QUERY.medium} {
                            &:first-of-type {
                                margin-top: 0;
                            }
                        }
                        margin-top: 5rem;
                        line-height: 1.5;
                    `}
                >
                    <h3>{title}</h3>
                    <Text small color="mono2">
                        {period}
                    </Text>
                    <Text as="p" style={{ paddingTop: '1rem' }}>
                        {description}
                    </Text>
                    <List>
                        {works.map((work) => (
                            <ListItem key={work}>{work}</ListItem>
                        ))}
                    </List>
                    <Skill>{skills}</Skill>
                </Box>
            ))}
        </Box>
    );
};

const Career: FC = () => {
    return (
        <>
            {' '}
            <Section>
                <h1>경력</h1>
                {careers.map(
                    ({
                        companyName,
                        position,
                        period,
                        description,
                        projects,
                    }) => (
                        <ProjectContainer
                            key={companyName}
                            style={{ marginTop: '4rem' }}
                        >
                            <Company>
                                <h3>{companyName}</h3>
                                <Text as="p" style={{ fontWeight: 700 }}>
                                    {position}
                                </Text>
                                <Text color="mono2" small>
                                    {period}
                                </Text>
                                <CompanyDescription>
                                    {description}
                                </CompanyDescription>
                            </Company>
                            <Projects projects={projects} />
                        </ProjectContainer>
                    ),
                )}
            </Section>
            <Section>
                <h1>기술</h1>
                {skills.map(({ header, list }) => (
                    <Box
                        key={header}
                        style={css`
                            margin-top: 5rem;
                            line-height: 1.5;
                        `}
                    >
                        <h3>{header}</h3>
                        <List>
                            {list.map((item) => (
                                <ListItem key={item}>{item}</ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </Section>
        </>
    );
};

const Section = styled.section`
    margin: 7em 0;

    h1 {
        font-size: 2.4rem;
    }
`;

const ProjectContainer = styled(ContainerComponent)`
    ${THEME_MEDIA_QUERY.medium} {
        flex-direction: row;
        gap: 3em;
    }
`;

const List = styled.ul`
    margin-top: 2.6rem;
`;

const Company = styled.div`
    line-height: 1.8;
    flex: 1;

    > h3 {
        font-size: 2.4rem;
        font-weight: 900;

        &::after {
            content: '';
            display: inline-block;
            width: 0.25em;
            height: 0.25em;
            margin: 0 0.2em;
            border-radius: 50%;
            background: ${({ theme }) => theme.color.primary};
        }
    }
`;

const CompanyDescription = styled.p`
    margin-top: 1rem;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.mono2};

    ${THEME_MEDIA_QUERY.medium} {
        font-size: 1.4rem;
    }
`;

const Skill = styled.p`
    display: inline-flex;
    margin-top: 2em;
    color: ${({ theme }) => theme.color.mono2};
    line-height: 1.8;
    letter-spacing: 0.4px;
    font-size: 0.85em;

    &::before {
        content: '';
        margin-right: 1rem;
        border-left: 5px solid ${({ theme }) => theme.color.mono1};
    }
`;

export default Career;

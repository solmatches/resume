import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Link } from '~/components';
import { THEME_MEDIA_QUERY } from '~/styles/constants';

interface Props {
    name: string;
    role: string;
    period: string;
    homepage?: string;
}

const Wrapper = styled.div`
    margin: 2rem 0;
`;

const Container = styled.div`
    display: flex;
    gap: 2.4rem;

    ${THEME_MEDIA_QUERY.tablet} {
        flex-direction: column;
    }
`;

const CompanyInfo = styled.div`
    min-width: 30rem;
    line-height: 1.5;

    ${THEME_MEDIA_QUERY.tablet} {
        padding-bottom: 2rem;
        border-bottom: 2px solid ${({ theme }) => theme.color.mono3};
    }
`;

const Name = styled.h2`
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.mono1};
    font-size: 1.2em;
    font-weight: 600;
    color: ${({ theme }) => theme.color.mono3};

    ${THEME_MEDIA_QUERY.tablet} {
        padding-bottom: 0;
        border: none;
    }
`;

const Role = styled.p`
    font-weight: 600;
`;

const LightText = styled.p`
    color: ${({ theme }) => theme.color.mono2};
`;

const Company: FC<Props> = ({ name, role, period, homepage, children }) => {
    return (
        <Wrapper>
            <Name>{name}</Name>
            <Container>
                <CompanyInfo>
                    <Role>{role}</Role>
                    <LightText>{period}</LightText>
                    {homepage && <Link to={homepage}>{homepage}</Link>}
                </CompanyInfo>
                {children}
            </Container>
        </Wrapper>
    );
};

export default Company;

import { css, SerializedStyles, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC, ReactElement } from 'react';

interface Props {
    chips: string[] | ReactElement[];
    css?: SerializedStyles;
}

export const Chip = styled.div<Pick<Props, 'css'>>`
    display: inline-block;
    padding: 0.5em 0.8em;
    border-radius: 1em;
    background: ${({ theme }) => theme.color.mono1};
    font-size: 1.2rem;
    transition: transform 0.3s;

    ${(props) => props.css}
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`;

export const Chips: FC<Props> = ({ chips, css: inheritedCSS }) => {
    const theme = useTheme();

    return (
        <Wrapper css={inheritedCSS}>
            {chips.map((chip, index) => {
                if (typeof chip === 'string') {
                    return <Chip key={index}>{chip}</Chip>;
                }
                return (
                    <Chip
                        key={index}
                        css={css`
                            border: 1px solid ${theme.color.mono2};
                        `}
                    >
                        {chip}
                    </Chip>
                );
            })}
        </Wrapper>
    );
};

/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC, ReactElement } from 'react';
import { THEME_COLOR } from '~/styles/constants';

interface Props {
    chips: string[] | ReactElement[];
    css?: SerializedStyles;
}

export const Chip = styled.div<Pick<Props, 'css'>>`
    display: inline-block;
    padding: 0.5em 0.8em;
    border-radius: 1em;
    background: ${THEME_COLOR.mono1};
    font-size: 1.2rem;
    transition: transform 0.3s;

    ${(props) => props.css}
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`;

export const Chips: FC<Props> = ({ chips, css: inheritedCSS }) => (
    <Wrapper css={inheritedCSS}>
        {chips.map((chip, index) => {
            if (typeof chip === 'string') {
                return <Chip key={index}>{chip}</Chip>;
            }
            return (
                <Chip
                    key={index}
                    css={css`
                        border: 1px solid ${THEME_COLOR.mono2};
                    `}
                >
                    {chip}
                </Chip>
            );
        })}
    </Wrapper>
);

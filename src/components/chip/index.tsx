import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, ReactElement } from 'react';

interface Props {
    chips: string[] | ReactElement[];
    cssProps?: SerializedStyles;
}

export const Chip = styled.div`
    display: inline-block;
    padding: 0.5em 0.8em;
    border-radius: 1em;
    background: ${({ theme }) => theme.color.mono1};
    font-size: 1.2rem;
    transition: transform 0.3s;
`;

const Wrapper = styled.div<Pick<Props, 'cssProps'>>`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    ${(props) => props.cssProps}
`;

export const Chips: FC<Props> = ({ chips, cssProps }) => (
    <Wrapper cssProps={cssProps}>
        {chips.map((chip, index) => {
            if (typeof chip === 'string') {
                return <Chip key={index}>{chip}</Chip>;
            }
            return (
                <Chip
                    key={index}
                    css={(theme) => ({
                        border: `1px solid ${theme.color.mono2}`,
                    })}
                >
                    {chip}
                </Chip>
            );
        })}
    </Wrapper>
);

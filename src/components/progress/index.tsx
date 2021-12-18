import styled from '@emotion/styled';
import React, { useState, useEffect, useRef, FC } from 'react';
import { THEME_COLOR } from '~/styles/constants';
import { Logo } from '../logo';

const initCy = 25;
const BaseCx = 35;
const addCx = 15;
const amplitude = 10;

const LOGO_SIZE = '60px';

const Loadings = styled.svg`
    width: 160px;
    height: 54px;

    circle {
        fill: ${THEME_COLOR.primary};
        stroke: ${THEME_COLOR.mono1};
    }
`;

export const Progress: FC = () => {
    let { current: currentAnimationTime } = useRef(0);
    const [cy, setCy] = useState([initCy, initCy, initCy]);

    useEffect(() => {
        let refID: number;
        const animate = () => {
            const newVal = cy.map(
                (c, i) =>
                    (cy[i] =
                        initCy +
                        amplitude * Math.sin(currentAnimationTime - i)),
            );
            setCy(newVal);

            currentAnimationTime += 0.15;
            refID = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(refID);
        };
    }, []);

    return (
        <>
            <Logo size={LOGO_SIZE} />
            <Loadings viewBox="0 0 100 50">
                {cy.map((circle, index) => (
                    <circle
                        key={index}
                        cy={circle}
                        cx={BaseCx + addCx * index}
                        r="5"
                    />
                ))}
            </Loadings>
        </>
    );
};

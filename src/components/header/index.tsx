import React, { FC, useContext, useState } from 'react';
import styled from '@emotion/styled';
import { THEME_SIZE, THEME_Z_INDEX } from '~/styles/constants';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from '../logo';
import { ThemeContext } from '~/styles';
import IconLight from '~/styles/assets/img/theme-light.svg';
import IconDark from '~/styles/assets/img/theme-dark.svg';
import { css } from '@emotion/react';

const activeStyle = (active: boolean) => css`
    transform: ${`scale(${active ? 0 : 1}) rotate(${active ? 180 : 0}deg)`};
`;

const HeaderComponent = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${THEME_Z_INDEX.header};
    background: ${({ theme }) => theme.color.mono0};

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: ${THEME_SIZE.contentMaxWidth};
        margin: 0 auto;
        padding: 1rem 1.6rem;
    }
`;

const ThemeButton = styled.button<{ active: boolean }>`
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: inherit;

    &:hover {
        background: rgba(200, 200, 200, 0.2);
    }

    img {
        position: absolute;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        padding: 1rem;
        transition: transform 0.3s ease-out;
        ${({ active }) => activeStyle(active)};
    }
`;

export const Header: FC = () => {
    const { theme, toggle } = useContext(ThemeContext);
    const [active, setActive] = useState(false);

    const handleThemeChange = () => {
        if (!toggle) return;
        setActive(true);

        setTimeout(() => {
            toggle();
            setActive(false);
        }, 200);
    };

    return (
        <HeaderComponent>
            <div>
                <h1>
                    <RouterLink to="/">
                        <Logo />
                    </RouterLink>
                </h1>
                <ThemeButton active={active} onClick={handleThemeChange}>
                    {active && (
                        <img
                            src={theme === 'dark' ? IconLight : IconDark}
                            alt="브라우저 테마 변경 아이콘"
                        />
                    )}
                    <img
                        src={theme === 'light' ? IconLight : IconDark}
                        alt="브라우저 테마 변경 아이콘"
                    />
                </ThemeButton>
            </div>
        </HeaderComponent>
    );
};

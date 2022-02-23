import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, useContext, useState } from 'react';

import { ThemeContext } from '~/styles';
import { ReactComponent as IconDark } from '~/styles/assets/img/theme-dark.svg';
import { ReactComponent as IconLight } from '~/styles/assets/img/theme-light.svg';
import { THEME_Z_INDEX } from '~/styles/constants';
import { hexToRgba } from '~/utils/hex-to-rgb';

const activeStyle = (active: boolean) => css`
    transform: ${`scale(${active ? 0 : 1}) rotate(${active ? 180 : 0}deg)`};
`;

const Toggle = styled.button<{ active: boolean }>`
    position: fixed;
    top: 1.6rem;
    right: 1.6rem;
    z-index: ${THEME_Z_INDEX.header};
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.mono0};
    box-shadow: ${({ theme }) =>
        `0 0 10px 1px ${hexToRgba(theme.color.mono3, 0.1)}`};

    &:hover {
        background: ${({ theme }) => theme.color.mono1};
    }

    svg {
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

export const ThemeSwitch: FC = () => {
    const { theme, toggle } = useContext(ThemeContext);
    const [active, setActive] = useState(false);

    const isDark = theme === 'dark';

    const handleThemeChange = () => {
        if (!toggle) return;
        setActive(true);

        setTimeout(() => {
            toggle();
            setActive(false);
        }, 200);
    };

    return (
        <Toggle active={active} onClick={handleThemeChange}>
            {isDark ? <IconDark /> : <IconLight />}
        </Toggle>
    );
};

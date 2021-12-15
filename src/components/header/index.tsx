import React from 'react';
import styled from '@emotion/styled';
import { THEME_Z_INDEX } from '../../global-styles/constants';
import LogoImage from '~/global-styles/assets/logo.svg';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../link';

const LOGO_SIZE = '36px';

const Logo = styled.img`
    display: inline-block;
    width: ${LOGO_SIZE};
    height: ${LOGO_SIZE};
`;
const HeaderComponent = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${THEME_Z_INDEX.header};
    background: #fff;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.6rem;
    }
`;
const Nav = styled.nav`
    position: relative;
    ul {
        display: flex;
    }
    li {
        padding: 0.6em 1em;
        border-radius: 1em;
        font-weight: 600;

        + li {
            margin-left: 0.5em;
        }
    }
`;

export const Header = () => {
    return (
        <HeaderComponent>
            <div>
                <h1>
                    <RouterLink to="/">
                        <Logo src={LogoImage} />
                    </RouterLink>
                </h1>
                <Nav>
                    <ul>
                        <li>
                            <Link to="/">소개</Link>
                        </li>
                        <li>
                            <Link to="/career">해온 것</Link>
                        </li>
                    </ul>
                </Nav>
            </div>
        </HeaderComponent>
    );
};

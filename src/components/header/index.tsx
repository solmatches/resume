import React, { FC } from 'react';
import styled from '@emotion/styled';
import {
    THEME_COLOR,
    THEME_MEDIA_QUERY,
    THEME_SIZE,
    THEME_Z_INDEX,
} from '~/styles/constants';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../link';
import { Logo } from '../logo';

const HeaderComponent = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${THEME_Z_INDEX.header};
    background: ${THEME_COLOR.mono0};

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: ${THEME_SIZE.contentMaxWidth};
        margin: 0 auto;
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
            ${THEME_MEDIA_QUERY.mobile} {
                margin-left: 0;
            }
        }
    }
`;

export const Header: FC = () => {
    return (
        <HeaderComponent>
            <div>
                <h1>
                    <RouterLink to="/">
                        <Logo />
                    </RouterLink>
                </h1>
                <Nav>
                    <ul>
                        <li>
                            <Link navigate to="/">
                                소개
                            </Link>
                        </li>
                        <li>
                            <Link navigate to="/career">
                                해온 것
                            </Link>
                        </li>
                    </ul>
                </Nav>
            </div>
        </HeaderComponent>
    );
};

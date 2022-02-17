import styled from '@emotion/styled';
import React, { FC } from 'react';
import pitureMeWebp from '~/styles/assets/img/picture-me.webp';
import pitureMeJpg from '~/styles/assets/img/picture-me.jpg';
import { THEME_MEDIA_QUERY } from '~/styles/constants';
import { Link } from '~/components';
import { css } from '@emotion/react';

const PRE_IMAGE_BACKGROUND = '#8bd2fc';

const Wrapper = styled.article`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 4rem;

    ${THEME_MEDIA_QUERY.tablet} {
        gap: 1.2rem;
    }
    ${THEME_MEDIA_QUERY.mobile} {
        flex-direction: column;
    }
`;

const ContactWrapper = styled.div`
    p {
        line-height: 1.5;
        word-break: break-word;
        color: ${({ theme }) => theme.color.mono2};

        + p {
            margin-top: 1rem;
        }
        a {
            color: ${({ theme }) => theme.color.mono3};

            &:hover {
                color: ${({ theme }) => theme.color.primary};
            }
        }
    }
`;

const ImageWrapper = styled.div`
    display: inline-block;
    border-radius: 1.6rem;
    overflow: hidden;
`;

const imageSize = css`
    width: 150px;
    height: 237px;
`;

const Image = styled.img`
    display: inline-block;
    background: ${PRE_IMAGE_BACKGROUND};
    ${imageSize}

    ${THEME_MEDIA_QUERY.tablet} {
        width: 100%;
        height: 100%;
        max-width: 150px;
        min-width: 100px;
        min-height: 158px;
    }
    ${THEME_MEDIA_QUERY.mobile} {
        ${imageSize}
    }
`;

const Profile: FC = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <picture>
                    <source srcSet={pitureMeWebp} type="image/webp" />
                    <source srcSet={pitureMeJpg} type="image/jpeg" />
                    <Image src={pitureMeJpg} alt="김소라 입니다" />
                </picture>
            </ImageWrapper>
            <ContactWrapper>
                <p>
                    이메일 :::{' '}
                    <Link to="mailto:solinepik@gmail.com">
                        solinepik@gmail.com
                    </Link>
                </p>
                <p>
                    연락처 ::: <Link to="tel:010-5367-8984">010-5367-8984</Link>
                </p>
                <p>
                    Github :::{' '}
                    <Link to="https://github.com/solmatches" target="_blank">
                        https://github.com/solmatches
                    </Link>
                </p>
            </ContactWrapper>
        </Wrapper>
    );
};

export default Profile;

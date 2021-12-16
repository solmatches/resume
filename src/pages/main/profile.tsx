import styled from '@emotion/styled';
import React, { FC } from 'react';
import pitureMeWebp from '~/global-styles/assets/img/picture-me.webp';
import pitureMeJpg from '~/global-styles/assets/img/picture-me.jpg';
import { THEME_COLOR, THEME_MEDIA_QUERY } from '~/global-styles/constants';

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
        color: ${THEME_COLOR.mono2};

        + p {
            margin-top: 1rem;
        }
        a {
            color: ${THEME_COLOR.mono3};

            &:hover {
                color: ${THEME_COLOR.primary};
            }
        }
    }
`;

const ImageWrapper = styled.div`
    display: inline-block;
    border-radius: 1.6rem;
    overflow: hidden;
`;

const Image = styled.img`
    display: inline-block;
    width: 100%;
    max-width: 150px;

    ${THEME_MEDIA_QUERY.mobile} {
        width: 150px;
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
                    <a href="mailto:solinepik@gmail.com">solinepik@gmail.com</a>
                </p>
                <p>
                    연락처 ::: <a href="tel:010-5367-8984">010-5367-8984</a>
                </p>
                <p>
                    Github :::{' '}
                    <a
                        href="https://github.com/solmatches"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/solmatches
                    </a>
                </p>
            </ContactWrapper>
        </Wrapper>
    );
};

export default Profile;

import styled from '@emotion/styled';
import React, { FC } from 'react';
import pitureMeWebp from '~/global-styles/assets/img/picture-me.webp';
import pitureMeJpg from '~/global-styles/assets/img/picture-me.jpg';

const Wrapper = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 4rem;

    p {
        line-height: 1.5;
        color: #666;

        a {
            color: #121212;
            &:hover {
                color: #bb5409;
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
            <div>
                <p>
                    이메일{' '}
                    <a href="mailto:solinepik@gmail.com">solinepik@gmail.com</a>
                </p>
                <p>
                    연락처 <a href="tel:010-5367-8984">010-5367-8984</a>
                </p>
                <p>
                    Github{' '}
                    <a
                        href="https://github.com/solmatches"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/solmatches
                    </a>
                </p>
            </div>
        </Wrapper>
    );
};

export default Profile;

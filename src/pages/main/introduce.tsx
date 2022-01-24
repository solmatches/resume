import styled from '@emotion/styled';
import React, { FC } from 'react';

const Wrapper = styled.article`
    margin-top: 5rem;
    line-height: 1.5;

    p + p {
        margin-top: 1em;
    }
    ul {
        margin-top: 1em;
        padding-left: 1.6rem;
    }
    li {
        list-style: disc;
        word-break: keep-all;

        + li {
            padding-top: 0.5rem;
        }
    }
`;

const Subject = styled.h2`
    margin-bottom: 2rem;
    font-size: 1.2em;
`;

const SubTitle = styled.h3`
    margin-bottom: 2rem;
    font-size: 1.1em;
`;

export const Introduce: FC = () => {
    return (
        <Wrapper>
            <Subject>저는 이런 사람입니다.</Subject>
            <SubTitle>사용자 중심으로 생각하는 개발자</SubTitle>
            <p>
                3년차 프론트 개발자 입니다. 스타트업 초창기 멤버로 입사해 프론트
                개발을 메인으로 필요에따라 디자인, PM 역할을 맡아오며, 서비스
                오픈부터 사용자가 5만명이 될 때까지 성장하는 것을 함께한 경험이
                있습니다.
            </p>
            <p>
                사용자의 즐거움이 나와 서비스의 성장이라고 생각합니다. 모든
                개발자들이 사용자와 직접 소통하여 피드백을 듣고 개선하는
                환경에서 일했던 경험으로, 사용자의 니즈를 빠르게 반영하고 미리
                예측하는 것이 서비스의 성장에 얼마나 중요한 역할을 하는지
                깨달았고, 이 과정에서 개인이 느끼는 책임감과 주도적인 마인드가
                스스로를 성장하게 한다는 것을 깨달았습니다.
            </p>
            <p>
                이런 경험을 밑바탕으로 한 <strong>저는 이런 개발자</strong>
                입니다.
            </p>
            <ul>
                <li>
                    <strong>사용자 입장에서 생각하고 고민하는 자세</strong>를
                    가지고 있습니다.
                </li>
                <li>
                    더 좋은 사용 경험을 선보이고 싶다는 욕심으로{' '}
                    <strong>
                        성능 개선, 빠른 적용과 업데이트를 위한 효율적인 개발
                        방법에 대한 관심
                    </strong>
                    이 많습니다.
                </li>
                <li>
                    동료들과 같은 목표를 가지고 함께 일하는것이 즐겁습니다.
                    원활한 협업을위해{' '}
                    <strong>
                        가독성이 좋고 이해하기 좋은 코드 작성을 선호
                    </strong>
                    합니다.
                </li>
                <li>
                    사용자들의 반응과 필요를 파악하고{' '}
                    <strong>주도적으로 일</strong>
                    하고 회의에 적극적으로 참여하며 의견을 나눕니다.
                </li>
                <li>
                    서비스든 개발 환경이든 불편한 점은 가능한 최선을다해
                    해결하려고 노력합니다.
                </li>
                <li>서비스를 만드는게 즐겁습니다.</li>
            </ul>
        </Wrapper>
    );
};

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
                모든 개발자들이 사용자 문의 처리를 직접하는 환경에서 사용자의
                피드백을 듣고 소통하며 개선하는 과정을 겪었습니다.
                <br />이 과정에서 사용자가 서비스에 애착을 느끼게되는 과정을
                경험하고 저 역시도 사용자에게 감사함과 소중함을 느끼게되며
                사용자와 감정적으로 교류하는 특별한 경험을 하였습니다.
            </p>
            <p>
                이런 경험으로 <strong>저는 이런 개발자</strong>가 되었습니다.
            </p>
            <ul>
                <li>
                    <strong>사용자 입장에서 생각하고 고민하는 자세</strong>를
                    가지게 되었습니다.
                </li>
                <li>
                    더 좋은 서비스를 만들고 싶다는 욕심으로{' '}
                    <strong>
                        성능 개선, 빠른 업데이트를 위한 효율적인 개발 방법에
                        대한 관심
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
                    을하고 회의에 적극적으로 참여하며 의견을 나눕니다.
                </li>
                <li>서비스를 만드는게 즐겁습니다.</li>
            </ul>
        </Wrapper>
    );
};

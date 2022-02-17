import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import { Chips, Link } from '~/components';
import { useFadeAnimation } from '~/hooks/use-fade-animation';
import { THEME_MEDIA_QUERY } from '~/styles/constants';
import Company from './company';
import Project from './project';

const Wrapper = styled.section`
    padding: 1.6rem;
    overflow: hidden;

    h1 {
        margin-bottom: 4rem;
    }
`;

const LightText = styled.p`
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.mono2};
    font-size: 0.9em;
`;

const RoleContent = styled.div`
    padding-left: 1rem;

    h3 {
        font-size: 1.2em;
        margin-bottom: 2rem;
    }
    li {
        list-style: disc;
        line-height: 1.5;
    }

    ${THEME_MEDIA_QUERY.tablet} {
        padding-left: 0;

        h3 {
            font-size: 1.6rem;
        }
        ul {
            padding-left: 1em;
        }
    }
`;

const Career: FC = () => {
    const [target, setTaget] = useState<HTMLElement | null>(null);

    useFadeAnimation({
        target: target?.getElementsByTagName('li'),
        options: {
            threshold: 0.15,
        },
    });

    return (
        <Wrapper>
            <h1>경력</h1>
            <article ref={setTaget}>
                <Company
                    name="주피타카 주식회사"
                    role="FrontEnd Developer"
                    period="18.12 ~ 21.11"
                    homepage="https://www.jupitaka.com/"
                >
                    <RoleContent>
                        <h3>소상공인을 위한 매출관리 앱 개발</h3>
                        <ul>
                            <Project
                                title="주카 앱 출시 (서비스 종료 수순)"
                                serviceDescription={[
                                    '하이브리드 웹앱',
                                    '소상공인을 위한 신용카드, 배달앱, 홈택스 매출 통합 조회/관리/분석 서비스 제공',
                                ]}
                                workDescription={[
                                    'Vue로 작업되어있던 기존 서비스를 React + Typescript + Monorepo 로 마이그레이션',
                                    'git, 개발 가이드를 도입하여 일관성있는 코드로 효율적인 협업 경험',
                                    'gitlab MR(PR) 기반 코드리뷰를 도입하여 코드퀄리티 향상',
                                ]}
                                skills={[
                                    'React',
                                    'Typescript',
                                    'monorepo(Lerna)',
                                    'Mobx',
                                    'Emotion',
                                    'Socket.io',
                                    'Chart.js',
                                ]}
                            >
                                <LightText>20.11 ~ 21.08</LightText>
                                <Chips
                                    chips={[
                                        <Link
                                            to="https://play.google.com/store/apps/details?id=com.jupitaka.juca"
                                            target="_blank"
                                            key="google"
                                        >
                                            구글플레이 스토어
                                        </Link>,
                                        <Link
                                            to="https://apps.apple.com/us/app/주카-juca/id1569771665"
                                            target="_blank"
                                            key="apple"
                                        >
                                            앱 스토어
                                        </Link>,
                                        <Link
                                            to="https://www.juca.kr/"
                                            target="_blank"
                                            key="homepage"
                                        >
                                            홈페이지
                                        </Link>,
                                    ]}
                                    css={css`
                                        margin-bottom: 2rem;
                                    `}
                                />
                            </Project>
                            <Project
                                title="주카 디자인 시스템 개발"
                                workDescription={[
                                    'Storybook을 이용해 Figma로 작성된 디자인 시스템을 컴포넌트화 하여 일관된 인터페이스와 효율적인 업무 의사소통 경험',
                                    '컴포넌트 사용 방법, 설명, 예시 문서 작성',
                                ]}
                                skills={[
                                    'React',
                                    'Typescript',
                                    'Emotion',
                                    'Storybook',
                                ]}
                            >
                                <LightText>21.02 ~ 21.04</LightText>
                            </Project>
                            <Project
                                title="사계부 앱 출시 (서비스 종료)"
                                serviceDescription={[
                                    '하이브리드 웹앱',
                                    '가입자 수 5만의 소상공인을 위한 신용카드, 배달앱, 홈택스 매출 통합 조회/관리/분석 서비스',
                                ]}
                                workDescription={[
                                    '홀로 프론트엔드 개발자로서 2년 동안 디자인/개발/배포/운영',
                                    '실시간 매출 보고서 전송을위해 socket.io 적용',
                                    '외부 어플에서 웹뷰로 사계부 서비스를 위해 app in app을 고려한 개발, 배포, 주요 색상 관리',
                                    '구글, 애플 인앱 결제 시스템 연결 및 멤버십 관리',
                                    '디바이스 시스템 폰트 사이즈에 대응할 수 있는 유연한 레이아웃 개발 관리',
                                ]}
                                skills={[
                                    'Vue',
                                    'Vuex',
                                    'Socket.io',
                                    'SCSS',
                                    'Chart.js',
                                ]}
                            >
                                <LightText>18.12 ~ 19.02</LightText>
                                <Chips
                                    chips={[
                                        <Link
                                            to="https://play.google.com/store/apps/details?id=com.jupitaka.bossbooka"
                                            target="_blank"
                                            key="google"
                                        >
                                            구글플레이 스토어
                                        </Link>,
                                        <Link
                                            to="https://apps.apple.com/kr/app/%EC%82%AC%EA%B3%84%EB%B6%80/id1455472321"
                                            target="_blank"
                                            key="apple"
                                        >
                                            앱 스토어
                                        </Link>,
                                    ]}
                                    css={css`
                                        margin-bottom: 2rem;
                                    `}
                                />
                            </Project>
                            <Project
                                title="사계부 홈페이지 개발"
                                serviceDescription={[
                                    '서비스 소개 및 앱스토어 연결',
                                    '인증서 등록 프로그램 설치, 멤버십 가입, 매출 보고서 다운로드 제공',
                                ]}
                                workDescription={[
                                    '카드결제 시스템 연동',
                                    '오픈 그래프 적용',
                                    '반응형 웹, 크로스 브라우징(ie10)',
                                ]}
                                skills={['Next.js', 'Redux', 'SCSS']}
                            >
                                <LightText>19.02 ~ 19.02</LightText>
                                <Chips
                                    chips={[
                                        <Link
                                            to="https://www.xn--989aj13atlc.kr/"
                                            target="_blank"
                                            key="homepage"
                                        >
                                            홈페이지
                                        </Link>,
                                    ]}
                                    css={css`
                                        margin-bottom: 2rem;
                                    `}
                                />
                            </Project>
                            <Project
                                title="회사 홈페이지 개발"
                                serviceDescription={['회사 소개 및 구인 안내']}
                                workDescription={[
                                    '카카오맵 적용 및 Proxy를 이용한 CORS 오류 처리',
                                    '오픈 그래프 적용',
                                    '반응형 웹, 크로스 브라우징(ie10)',
                                ]}
                                skills={['React', 'Redux', 'StyledComponent']}
                            >
                                <LightText>19.02 ~ 19.02</LightText>
                                <Chips
                                    chips={[
                                        <Link
                                            to="https://www.jupitaka.com/"
                                            target="_blank"
                                            key="homepage"
                                        >
                                            홈페이지
                                        </Link>,
                                    ]}
                                    css={css`
                                        margin-bottom: 2rem;
                                    `}
                                />
                            </Project>
                        </ul>
                    </RoleContent>
                </Company>
                <Company
                    name="핀플 주식회사"
                    role="FrontEnd Developer, Designer"
                    period="17.10 ~ 18.11"
                >
                    <RoleContent>
                        <h3>소상공인용 가계부 앱 개발</h3>
                        <ul>
                            <Project
                                title="장부장 앱 출시 및 운영 (서비스 종료)"
                                serviceDescription={[
                                    '하이브리드 웹앱',
                                    '카드매출, 홈택스 매출 통합 관리',
                                    '매출, 입금 요약 서비스 제공',
                                ]}
                                workDescription={[
                                    '정적 웹페이지였던 기존 작업을 Vue를 이용해 마이그레이션',
                                    'SCSS, PostCSS를 이용한 스타일처리',
                                    '서비스 리뉴얼 설계, 디자인, 개발',
                                    '매출 다이어리 등 신규 기능 개발 및 운영',
                                ]}
                                skills={['Vue', 'Vuex', 'SCSS']}
                            >
                                <LightText>17.10 ~ 18.11</LightText>
                            </Project>
                            <Project
                                title="회사, 서비스 홈페이지 개발"
                                serviceDescription={[
                                    '장부상 서비스 소개 및 인증서 연동, 매출 자료 다운받기 개발',
                                    '회사 소개',
                                ]}
                                workDescription={[
                                    '반응형 웹 페이지 작업',
                                    '크로스 브라우징 작업 (ie9 호환)',
                                    'seo 적용 및 검색 최적화',
                                ]}
                                skills={['HTML', 'CSS', 'Javascript']}
                            >
                                <LightText>18.03 ~ 18.03</LightText>
                            </Project>
                        </ul>
                    </RoleContent>
                </Company>
            </article>
        </Wrapper>
    );
};

export default Career;

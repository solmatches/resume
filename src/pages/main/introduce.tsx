import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

import { ReactComponent as IconGithubComponent } from '~/assets/svg/github.svg';
import { Box, Chip, Container, Link, Text } from '~/components';

export const Introduce: FC = () => {
  return (
    <>
      <Title>
        김소라
        <span>Frontend Developer</span>
      </Title>
      <Container row gap={1} style={{ alignItems: 'flex-start' }}>
        <LinkChip>
          <Link to="https://github.com/solmatches" target="_blank">
            <IconGithub />
            GITHUB
          </Link>
        </LinkChip>
        <LinkChip>
          <Link to="mailto:solinepik@gmail.com">EMAIL</Link>
        </LinkChip>
      </Container>
      <Box
        as="article"
        style={css`
          margin: 4rem 0 2rem;

          h2 {
            line-height: 2.5;
            font-size: 1em;
          }

          p + p {
            margin-top: 1.6rem;
          }
        `}
      >
        <h2>몰입하는 즐거움을 아는 프론트엔드 개발자입니다!</h2>
        <Text as="p">
          스타트업에서 3년간 웹뷰 기반 앱 서비스를 초기 구축부터 서비스 종료 시 까지 개발/운영한 경험이 있습니다.
        </Text>
        <Text as="p">
          서비스의 성장에 기여하는 것에 관심이 많습니다. 비즈니스적 임팩트를 고려하여 일의 우선순위를 파악할 수 있도록
          노력해왔으며, 동료들과 적극적으로 소통하고 아이디어를 빠르게 시도해보면서 확보한 데이터를 통해 서비스의 개선
          방향을 찾고 사용자의 편의를 향상 시킬 수 있도록 고민해왔습니다.
        </Text>
        <Text as="p">동료들에게 같이 일하고 싶은, 신뢰할 수 있는 사람이 되는 것이 저의 작은 목표입니다.</Text>
      </Box>
    </>
  );
};

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 3.2rem;
  font-weight: 900;

  span {
    display: block;
    font-size: 0.8em;
  }
`;

const LinkChip = styled(Chip)`
  padding: 0;
  font-weight: 700;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    line-height: 20px;
    padding: 0.4em 1em;
  }
`;

const IconGithub = styled(IconGithubComponent)`
  path {
    fill: ${({ theme }) => theme.color.mono4};
  }
`;

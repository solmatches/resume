import { css } from '@emotion/react';
import { FC } from 'react';

import Image from '~/assets/svg/logo.svg';

const DEFAULT_SIZE = '36px';

interface Props {
  size?: string;
}

const style = ({ size = DEFAULT_SIZE }) => css`
  display: inline-block;
  width: ${size};
  height: ${size};
`;

export const Logo: FC<Props> = (props) => <img src={Image} css={style(props)} />;

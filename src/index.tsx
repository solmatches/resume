import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles';
import { Progress } from './components';
import styled from '@emotion/styled';
import { THEME_Z_INDEX } from './styles/constants';

const BLUR_VALUE = '8px';

const ProgressWrppaer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${THEME_Z_INDEX.modal};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-backdrop-filter: blur(${BLUR_VALUE});
    backdrop-filter: blur(${BLUR_VALUE});
`;

ReactDOM.render(
    <React.StrictMode>
        {/* TODO: 브라우저 테마 선택에 따른 테마 전환. 미디어 쿼리 */}
        <GlobalStyles
            fallback={
                <ProgressWrppaer>
                    <Progress />
                </ProgressWrppaer>
            }
        >
            <Router>
                <Pages />
            </Router>
        </GlobalStyles>
    </React.StrictMode>,
    document.getElementById('root'),
);

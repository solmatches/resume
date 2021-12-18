import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles';

ReactDOM.render(
    <React.StrictMode>
        {/* TODO: 스피너 컴포넌트 추가 */}
        {/* TODO: 브라우저 테마 선택에 따른 테마 전환. 미디어 쿼리 */}
        <GlobalStyles fallback={<>폰트 로딩중...</>}>
            <Router>
                <Pages />
            </Router>
        </GlobalStyles>
    </React.StrictMode>,
    document.getElementById('root'),
);

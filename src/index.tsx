import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles fallback={<>폰트 로딩중...</>}>
            <Router>
                <Pages />
            </Router>
        </GlobalStyles>
    </React.StrictMode>,
    document.getElementById('root'),
);

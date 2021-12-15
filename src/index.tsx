import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles fallback={<>폰트 로딩중...</>}>첫 페이지!</GlobalStyles>
    </React.StrictMode>,
    document.getElementById('root'),
);

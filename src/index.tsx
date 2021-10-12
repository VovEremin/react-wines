import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from "./GlobalStyles";
import {Reset} from "styled-reset";
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles />
        <Reset />
        <App />
    </Provider>,
    document.getElementById('root'));
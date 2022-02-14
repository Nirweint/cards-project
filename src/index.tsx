import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./app/App";
import {Provider} from "react-redux";
import {store} from "./state";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
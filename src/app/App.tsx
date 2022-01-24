import React from 'react';
import './App.css';
import {Main} from "./main";
import {HashRouter} from "react-router-dom";

export const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Main/>
            </HashRouter>
        </div>
    )
}
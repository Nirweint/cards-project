import React from 'react';
import {RoutesComponent} from "../routes";
import {Header} from "../header";
import s from './Main.module.css'

export const Main = () => {
    return (
        <div>
            <Header/>
            <div className={s.wrapper}>
                <RoutesComponent/>
            </div>
        </div>
    );
}
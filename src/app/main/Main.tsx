import React from 'react';
import {RoutesComponent} from "../routes";
import {Header} from "../header";

export const Main = () => {
    return (
        <div>
            <Header/>
            <RoutesComponent/>
        </div>
    );
}
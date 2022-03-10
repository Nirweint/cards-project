import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/RoutesComponent";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
                <NavLink to={PATH.PACKS_LIST}>Packs</NavLink>
            </nav>
        </header>
    );
}
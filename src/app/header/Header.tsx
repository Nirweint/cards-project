import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/RoutesComponent";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header>
            <nav className={s.nav}>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
                <NavLink to={PATH.SIGN_UP}>SignUp</NavLink>
                <NavLink to={PATH.NEW_PASSWORD_ENTER}>NewPasswordEnter</NavLink>
                <NavLink to={PATH.PASSWORD_RECOVERY}>PasswordRecovery</NavLink>
                <NavLink to={PATH.ERROR_404}>Error404</NavLink>
                <NavLink to={PATH.TEST}>Test</NavLink>
            </nav>
        </header>
    );
}
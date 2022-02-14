import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/RoutesComponent";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
                <NavLink to={PATH.SIGN_UP}>Sign Up</NavLink>
                <NavLink to={PATH.NEW_PASSWORD_ENTER}>New Password Enter</NavLink>
                <NavLink to={PATH.PASSWORD_RECOVERY}>Password Recovery</NavLink>
                <NavLink to={PATH.ERROR_404}>Error 404</NavLink>
                <NavLink to={PATH.TEST}>Test</NavLink>
                <NavLink to={PATH.SHOP_TABLE}>ShopTable</NavLink>
            </nav>
        </header>
    );
}
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {
    CardsList,
    Error404,
    Login,
    NewPasswordEnter,
    PasswordRecovery,
    Profile,
    SignUp,
} from "../../features";
import PacksList from "../../features/packsList/PacksList";
import {LearnPage} from "../../features/learnPage";

export const PATH = {
    PROFILE: '/profile',
    LOGIN: '/login',
    SIGN_UP: '/signup',
    NEW_PASSWORD_ENTER: '/set-new-password/:token',
    PASSWORD_RECOVERY: '/password-recovery',
    ERROR_404: '/error404',
    SHOP_TABLE: '/shoptable',
    CARDS_LIST: '/cards-list/:id',
    LEARN_PAGE: '/learn/:id',
};

export const RoutesComponent = () => {

    return (
        <>
            <Routes>
                <Route index element={<Navigate replace to={PATH.PROFILE}/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.SIGN_UP} element={<SignUp/>}/>
                <Route path={PATH.NEW_PASSWORD_ENTER} element={<NewPasswordEnter/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.ERROR_404} element={<Error404/>}/>
                <Route path={PATH.SHOP_TABLE} element={<PacksList/>}/>
                <Route path={PATH.CARDS_LIST} element={<CardsList/>}/>
                <Route path={PATH.LEARN_PAGE} element={<LearnPage/>}/>
            </Routes>
        </>
    );
};
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {
    Error404,
    Login,
    NewPasswordEnter,
    PasswordRecovery,
    Profile,
    SignUp,
    Test
} from "../../features";
import ShopTable from "../../features/showTable/ShopTable";

export const PATH = {
    PROFILE: '/profile',
    LOGIN: '/login',
    SIGN_UP: '/signup',
    NEW_PASSWORD_ENTER: '/set-new-password/:token',
    PASSWORD_RECOVERY: '/password-recovery',
    ERROR_404: '/error404',
    TEST: '/test',
    SHOP_TABLE: 'shoptable'
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
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.SHOP_TABLE} element={<ShopTable/>}/>
            </Routes>
        </>
    );
};
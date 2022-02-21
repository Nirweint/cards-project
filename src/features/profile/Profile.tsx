import React from 'react';
import {Navigate} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../../state/selectors/auth";
import {ProfileInfo} from "./profileInfo/profileInfo";
import {LogOutTC} from "../../state/middlewares/login";
import {Button} from "../../components";

export const Profile = () => {
    const isAuth = useSelector(selectIsAuth)

    const dispatch = useDispatch()

    const onLogoutClick = () => {
        dispatch(LogOutTC())
    }

    if (!isAuth) {
        return <Navigate replace to={PATH.LOGIN}/>
    }

    return (
        <div>
            <ProfileInfo/>
            {isAuth && <Button onClick={onLogoutClick}>Log Out</Button>}
        </div>
    );
};
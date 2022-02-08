import React from 'react';
import {Navigate} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../../state/selectors/auth";
import {LogOutTC} from "../../state/middlewares/login";
import {Button} from "../../components/common/button";

export const Profile = () => {
    const isAuth = useSelector(selectIsAuth)

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(LogOutTC())
    }

    if (!isAuth) {
        return <Navigate replace to={PATH.LOGIN}/>
    }

    return (
        <div>
            <h1>Profile page</h1>
            {isAuth && <Button onClick={logoutHandler}>Log Out</Button>}
        </div>
    );
};
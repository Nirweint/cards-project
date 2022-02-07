import React from 'react';
import {Navigate} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../state/selectors/auth";

export const Profile = () => {
    const isAuth = useSelector(selectIsAuth)

    if (!isAuth) {
        return <Navigate replace to={PATH.LOGIN}/>
    }

    return (
        <div>
            Profile page
        </div>
    );
};
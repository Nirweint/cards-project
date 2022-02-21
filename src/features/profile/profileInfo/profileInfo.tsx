import React from 'react';
import {useSelector} from "react-redux";
import {Loading} from "../../../components";
import {selectAppStatus} from "../../../state/selectors/app";
import {ProfileInfoName} from "./profileInfoName";
import {ProfileInfoAvatar} from "./profileInfoAvatar";
import s from './profileInfo.module.css'

export const ProfileInfo = () => {

    const appStatus = useSelector(selectAppStatus)

    if (appStatus === 'loading') {
        return <Loading/>
    }

    return (
        <div className={s.wrapper}>
            <h2>Personal information</h2>
            <ProfileInfoAvatar/>
            <ProfileInfoName/>
        </div>
    );
};
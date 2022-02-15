import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../../../components";
import {selectAppStatus} from "../../../state/selectors/app";
import {ProfileInfoName} from "./profileInfoName";
import {ProfileInfoAvatar} from "./profileInfoAvatar";
import {fetchAuthMe} from "../../../state/middlewares/authMe";
import s from './profileInfo.module.css'

export const ProfileInfo = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAuthMe())
    }, [dispatch])
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
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../../../components/common";
import {selectAppStatus} from "../../../state/selectors/app";
import {ProfileInfoName} from "./profileInfoName";
import {ProfileInfoAvatar} from "./profileInfoAvatar";
import {fetchAuthMe} from "../../../state/middlewares/authMe";

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
        <div>
            <ProfileInfoAvatar/>
            <ProfileInfoName/>
        </div>
    );
};
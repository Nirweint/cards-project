import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeProfileAvatar} from "../../../state/middlewares/profile";
import {selectProfileAvatar} from "../../../state/selectors/profile";
import s from './profileInfo.module.css'

export const ProfileInfoAvatar = () => {

    const profileAvatar = useSelector(selectProfileAvatar)
    const dispatch = useDispatch()

    let [editMode, setEditMode] = useState(false);
    let [avatar, setAvatar] = useState(profileAvatar);

    const changeTitleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        setAvatar(e.currentTarget.value)
    }

    const activateEditModeAvatar = () => {
        setEditMode(true);
        setAvatar(avatar)
    }

    const activateViewModeAvatar = () => {
        if (avatar) {
            setEditMode(false);
            dispatch(changeProfileAvatar(avatar))
        }
    }


    return (
        <div>
            <div className={s.imgAvatarZone}>
                <img className={s.imgAvatarPic} src={avatar} alt={'Avatar'}/>
            </div>

            {!editMode
                ? <div onDoubleClick={activateEditModeAvatar}>Avatar url: {profileAvatar}</div>
                : <div>
                    Avatar url: <input autoFocus value={avatar} onChange={changeTitleAvatar}
                                       onBlur={activateViewModeAvatar}/>
                </div>
            }
        </div>
    );
};
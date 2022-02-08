import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectProfileAvatar} from "../../../state/selectors/auth";
import {setProfileAva} from "../../../state/middlewares/authMe";

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
        setEditMode(false);
        dispatch(setProfileAva(avatar))
    }

    return (
        <div>
            <img style={{width: '200px'}} src={avatar} alt={'Avatar'}/>
            {!editMode
                ? <div onDoubleClick={activateEditModeAvatar}>Avatar url: {profileAvatar}</div>
                : <div>
                    Avatar url: <input autoFocus value={avatar} onChange={changeTitleAvatar} onBlur={activateViewModeAvatar}/>
                </div>
            }
        </div>
    );
};
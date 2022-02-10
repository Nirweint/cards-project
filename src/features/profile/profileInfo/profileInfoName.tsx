import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeProfileName} from "../../../state/middlewares/profile";
import {selectProfileName} from "../../../state/selectors/profile";

export const ProfileInfoName = () => {

    const profileName = useSelector(selectProfileName)
    const dispatch = useDispatch()

    let [editMode, setEditMode] = useState(false);
    let [name, setName] = useState(profileName);

    const changeTitleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const activateEditModeName = () => {
        setEditMode(true);
        setName(name);
    }

    const activateViewModeName = () => {
        if (name) {
            setEditMode(false);
            dispatch(changeProfileName(name))
        }
    }

    return (
        <div>
            {!editMode
                ? <div onDoubleClick={activateEditModeName}>Name: {profileName}</div>
                : <div>
                    Name: <input autoFocus value={name} onChange={changeTitleName} onBlur={activateViewModeName}/>
                </div>
            }
        </div>
    );
};
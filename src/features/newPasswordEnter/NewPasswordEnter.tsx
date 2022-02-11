import React, {useState} from 'react';
import {InputText} from "../../components";
import {Button} from "../../components";
import {useDispatch} from "react-redux";
import {setNewPasswordTC} from "../../state/reducers/newPasswordEnter";
import {useParams} from "react-router-dom";
import s from '../../components/common/styles/Common.module.css'

export const NewPasswordEnter = () => {

    const [newPassword, setNewPassword] = useState<string>('');
    const {token} = useParams();

    const dispatch = useDispatch();

    const createNewPasswordHandler = () => {
        dispatch(setNewPasswordTC(newPassword, token))
    };

    return (
        <div className={s.wrapper}>
            <h2>Create new password</h2>
            <div>
                <InputText placeholder="Password"
                           type="password"
                           onChange={e => setNewPassword(e.currentTarget.value)}/>
            </div>
            <p>
                Create new password and we will send you<br/>
                further instructions to email
            </p>
            <Button className={s.button} onClick={createNewPasswordHandler}>Create new password</Button>
        </div>
    );
};

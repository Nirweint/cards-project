import React, {useState} from 'react';
import {InputText} from "../../components/common/inputText";
import {Button} from "../../components/common/button";
import {useDispatch} from "react-redux";
import {setNewPasswordTC} from "../../state/reducers/newPasswordEnter";
import {Navigate, useParams} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";

export const NewPasswordEnter = () => {

    const [newPassword, setNewPassword] = useState<string>('');
    const {token} = useParams();

    const dispatch = useDispatch();

    const createNewPasswordHandler = () => {
        dispatch(setNewPasswordTC(newPassword, token))
    };

    return (
        <div>
            <h3>Create new password</h3>
            <div>
                <InputText placeholder="Password"
                           type="password"
                           onChange={e => setNewPassword(e.currentTarget.value)}/>
            </div>
            <p>
                Create new password and we will send you<br/>
                further instructions to email
            </p>
            <Button onClick={createNewPasswordHandler}>Create new password</Button>
        </div>
    );
};

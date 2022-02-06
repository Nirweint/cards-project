import React, {ChangeEvent, useState} from 'react';
import {Button, InputText} from "../../components/common";
import {NavLink} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handleChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const handleLoginClick = () => {
        // dispatch login request
    }

    return (
        <div>
            <p>Sign In</p>
            Email
            <InputText onChange={handleChangeEmailInput} value={email}/>
            Password
            <InputText onChange={handleChangePasswordInput}
                       type={'password'}
                       value={password}/>
            <div>
                <NavLink to={PATH.PASSWORD_RECOVERY}>Forgot Password?</NavLink>
            </div>
            <Button onClick={handleLoginClick}>Login</Button>
        </div>
    );
};
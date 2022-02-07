import React, {ChangeEvent, useState} from 'react';
import {Button, InputText} from "../../components/common";
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin} from "../../state/middlewares/login";
import {selectIsAuth} from "../../state/selectors/auth";

export const Login = () => {

    const auth = useSelector(selectIsAuth)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handleChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const handleLoginClick = () => {
        dispatch(fetchLogin(email,password))
        if (auth) {
            return <Navigate to={PATH.PROFILE}/>
        }
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
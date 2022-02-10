import React, {ChangeEvent, useState} from 'react';
import {Button, Checkbox, InputText, Loading} from "../../components/common";
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin} from "../../state/middlewares/login";
import {selectAppStatus} from "../../state/selectors/app";
import {selectIsAuth} from "../../state/selectors/auth";

export const Login = () => {

    const dispatch = useDispatch()
    const appStatus = useSelector(selectAppStatus)
    const isAuth = useSelector(selectIsAuth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState<boolean>(false)

    const handleChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handleChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const handleLoginClick = () => {
        dispatch(fetchLogin(email, password, checked))

    }

    if (appStatus === 'loading') {
        return <Loading/>
    }

    if (isAuth) {
        return <Navigate to={PATH.PROFILE}/>
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
            <Checkbox checked={checked}
                      onChangeChecked={setChecked}>Remember me?</Checkbox>
            <div>
                <NavLink to={PATH.PASSWORD_RECOVERY}>Forgot Password?</NavLink>
            </div>
            <Button onClick={handleLoginClick}>Login</Button>

        </div>
    );
};
import React, {ChangeEvent, useState} from 'react';
import {Button, Checkbox, InputText, Loading} from "../../components";
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../../state/middlewares/login";
import {selectAppStatus} from "../../state/selectors/app";
import {selectIsAuth} from "../../state/selectors/auth";

export const Login = () => {

    const dispatch = useDispatch()

    const appStatus = useSelector(selectAppStatus)
    const isAuth = useSelector(selectIsAuth)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    const isPasswordLengthValid = password.length > 7

    const onEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setEmail(value)
    }

    const onPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setPassword(value)
    }

    const onLoginClick = () => {
        if (!isEmailValid) {
            setError('Invalid email address')
        }
        if (!isPasswordLengthValid) {
            setError('Invalid password')
        }
        if (isEmailValid && isPasswordLengthValid) {
            dispatch(setLogin(email, password, checked))
            setError(null)
        }
    }

    if (appStatus === 'loading') {
        return <Loading/>
    }

    if (isAuth) {
        return <Navigate to={PATH.PROFILE}/>
    }

    return (
        <div>
            <h2>Sign In</h2>
            <label>Email</label>
            <InputText
                type='email'
                name='email'
                onChange={onEmailInputChange}
                value={email}
            />
            <label>Password</label>
            <InputText
                onChange={onPasswordInputChange}
                type='password'
                value={password}
            />
            <Checkbox
                checked={checked}
                onChangeChecked={setChecked}
            >
                Remember me?
            </Checkbox>
            {error && <div>{error}</div>}
            <div>
                <NavLink to={PATH.PASSWORD_RECOVERY}>Forgot Password?</NavLink>
            </div>
            <Button onClick={onLoginClick}>Login</Button>
            <p>Don't have an account?</p>
            <div>
                <NavLink to={PATH.SIGN_UP}>Sign Up</NavLink>
            </div>
        </div>
    );
};
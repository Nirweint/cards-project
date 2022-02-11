import React, {useState} from 'react';
import {Button, Checkbox, InputText, Loading} from "../../components";
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../../state/middlewares/login";
import {selectAppStatus} from "../../state/selectors/app";
import {selectIsAuth} from "../../state/selectors/auth";
import {isEmailValid, isPasswordLengthValid} from "../../utils";
import s from '../../components/common/styles/Common.module.css'

export const Login = () => {

    const dispatch = useDispatch()

    const appStatus = useSelector(selectAppStatus)
    const isAuth = useSelector(selectIsAuth)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const onLoginClick = () => {
        if (!isEmailValid(email)) {
            setError('Invalid email address')
        }
        if (!isPasswordLengthValid(password)) {
            setError('Invalid password')
        }
        if (isEmailValid(email) && isPasswordLengthValid(password)) {
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
        <div className={s.wrapper}>
            <h2>Sign In</h2>
            <label>Email</label>
            <InputText
                type='email'
                name='email'
                onChangeText={setEmail}
                value={email}
            />
            <label>Password</label>
            <InputText
                onChangeText={setPassword}
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
            <Button className={s.button} onClick={onLoginClick}>Login</Button>
            <p>Don't have an account?</p>
            <div>
                <NavLink to={PATH.SIGN_UP}>Sign Up</NavLink>
            </div>
        </div>
    );
};
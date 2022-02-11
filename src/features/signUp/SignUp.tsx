import React, {useState} from 'react';
import {InputText} from "../../components";
import {Button} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {signUpThunk} from "../../state/middlewares/signUp";
import {Navigate} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {isEmailValid, isPasswordLengthValid} from "../../utils";
import {selectIsSignUpSuccess} from "../../state/selectors/auth";
import s from '../../components/common/styles/Common.module.css'
import style from './SignUp.module.css'

export const SignUp = () => {

    const dispatch = useDispatch()

    const isSignUpSuccess = useSelector(selectIsSignUpSuccess)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const submitRegister = () => {
        if (!isEmailValid(email)) {
            setError('Invalid email address')
        }
        if (!isPasswordLengthValid(password)) {
            setError('Invalid password')
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match')
        }
        if (isEmailValid(email) && password === confirmPassword) {
            dispatch(signUpThunk(email, password))
            setError(null)
        }
    }

    const cancelHandler = () => {
        console.log('dont work')
    }

    if (isSignUpSuccess) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div className={s.wrapper}>
            <h1>It-incubator</h1>
            <h2>Sign Up</h2>
            <div>
                <label>Email</label>
                <InputText
                    name='email'
                    onChangeText={setEmail}
                />
                <label>Password</label>
                <InputText
                    type='password'
                    onChangeText={setPassword}
                />
                <label>Confirm Password</label>
                <InputText
                    type='password'
                    onChangeText={setConfirmPassword}
                />
                {error && <div className={s.error}>{error}</div>}
                <div className={style.btn}>
                    <Button className={style.btnCancel} onClick={cancelHandler}>Cancel</Button>
                    <Button className={style.btnRegister} onClick={submitRegister}>Register</Button>
                </div>

            </div>
        </div>
    );
};
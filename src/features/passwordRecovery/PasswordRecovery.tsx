import React, {ChangeEvent, useState} from 'react';
import {Button, InputText} from "../../components";
import {useDispatch} from "react-redux";
import { sendEmailThunk } from '../../state/middlewares/forgotPassword';
import {ForgotPasswordDataRequestType} from "../../api/authAPI";
import s from '../../components/common/styles/Common.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";

export const PasswordRecovery = () => {
    const [email, setEmail] = useState<string>('')
    const [forgot, setForgot] = useState<boolean>(false)

    const dispatch = useDispatch()

    const dataRequest: ForgotPasswordDataRequestType = {
        email,
        from: "test-front-admin <ivan.ravinskiy@gmail.com>", // можно указать разработчика фронта)
        message: `<div style="background-color: lime; padding: 15px">	
	                password recovery link: 
	                <a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
	                </div>` // хтмп-письмо, вместо $token$ бэк вставит токен

    }


    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const sendEmailHandler= () => {
        dispatch(sendEmailThunk(dataRequest))
                setForgot(true)
    }

    return (
        <div className={s.wrapper}>
            <h2>Forgot your password?</h2>
            {!forgot
                ? <div>
                    <InputText placeholder={'Email'}
                               value={email}
                               onChange={onChangeEmailHandler}/>
                    <Button className={s.button} onClick={sendEmailHandler}>Send instructions
                    </Button>
                    <p>Did you remember your password?</p>
                    <div>
                        <NavLink to={PATH.LOGIN}>Try logging in</NavLink>
                    </div>
                </div>
                : <div>Check Email. We've sent an Email with instructions to {email}</div>}
        </div>
    );
};


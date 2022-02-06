import React, {useState} from 'react';
import {InputText} from "../../components/common/inputText";
import {Checkbox} from "../../components/common/checkbox";
import {Button} from "../../components/common/button";
import {useDispatch} from "react-redux";
import {signUpThunk} from "../../state/middlewares/signUp";

export const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPasword, setConfirmPasword] = useState('')

    const dispatch = useDispatch()

    const submitRegister = () => {
        if (password === confirmPasword){
            dispatch(signUpThunk(email ,password))
        }

    }

    return (
        <div>
            <div style={{textAlign:'center' }}>
                <h1>Sign Up</h1>
                <div>
                    <InputText style={{width: '200px',margin:'5px auto'}} placeholder={'Email'} onChange={e => setEmail(e.currentTarget.value)}/>
                    <InputText style={{width: '200px',margin:'5px auto'}} placeholder={'Password'} type='password' onChange={e => setPassword(e.currentTarget.value)}/>
                    <InputText style={{width: '200px',margin:'5px auto'}} placeholder={'Confirm Password'} type='password' onChange={e => setConfirmPasword(e.currentTarget.value)}/>
                    <Button onClick={submitRegister}>Registr</Button>
                </div>

            </div>
        </div>
    );
};
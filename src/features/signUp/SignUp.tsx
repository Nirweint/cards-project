import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import s from '../../components/common/styles/Common.module.css';

import style from './SignUp.module.css';

import { PATH } from 'app/routes/RoutesComponent';
import { InputText, Button } from 'components';
import { signUpThunk } from 'state/middlewares/signUp';
import { selectIsSignUpSuccess } from 'state/selectors/auth';
import { ReturnComponentType } from 'types';
import { isEmailValid, isPasswordLengthValid } from 'utils';

export const SignUp = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const isSignUpSuccess = useSelector(selectIsSignUpSuccess);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const submitRegister = (): void => {
    if (!isEmailValid(email)) {
      setError('Invalid email address');
    }
    if (!isPasswordLengthValid(password)) {
      setError('Invalid password');
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    }
    if (isEmailValid(email) && password === confirmPassword) {
      dispatch(signUpThunk(email, password));
      setError(null);
    }
  };

  if (isSignUpSuccess) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div className={s.wrapper}>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="email">Email</label>
        <InputText name="email" onChangeText={setEmail} />
        <label htmlFor="password">Password</label>
        <InputText type="password" name="password" onChangeText={setPassword} />
        <label htmlFor="verify-password">Confirm Password</label>
        <InputText
          type="password"
          name="verify-password"
          onChangeText={setConfirmPassword}
        />
        {error && <div className={s.error}>{error}</div>}
        <div className={style.btnWrapper}>
          <NavLink className={s.link} to={PATH.LOGIN}>
            <Button className={style.btnCancel}>Cancel</Button>
          </NavLink>
          <Button className={style.btnRegister} onClick={submitRegister}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

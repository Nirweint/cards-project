import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import s from '../../components/common/styles/Common.module.css';

import { PATH } from 'app/routes/RoutesComponent';
import { Button, Checkbox, InputText, Loading } from 'components';
import { setLogin } from 'state/middlewares/login';
import { selectAppStatus } from 'state/selectors/app';
import { selectIsAuth } from 'state/selectors/auth';
import { ReturnComponentType } from 'types';
import { isEmailValid, isPasswordLengthValid } from 'utils';

export const Login = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const appStatus = useSelector(selectAppStatus);
  const isAuth = useSelector(selectIsAuth);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onLoginClick = (): void => {
    if (!isEmailValid(email)) {
      setError('Invalid email address');
    }
    if (!isPasswordLengthValid(password)) {
      setError('Invalid password');
    }
    if (isEmailValid(email) && isPasswordLengthValid(password)) {
      dispatch(setLogin(email, password, checked));
      setError(null);
    }
  };

  if (appStatus === 'loading') {
    return <Loading />;
  }

  if (isAuth) {
    return <Navigate to={PATH.PACKS_LIST} />;
  }

  return (
    <div className={s.wrapper}>
      <h2>Sign In</h2>
      <div>
        <label htmlFor="email">
          Email
          <InputText
            type="email"
            name="email"
            id="email"
            onChangeText={setEmail}
            value={email}
          />
        </label>

        <label htmlFor="password">
          Password
          <InputText
            onChangeText={setPassword}
            type="password"
            id="password"
            value={password}
          />
        </label>

        <Checkbox
          style={{ width: '20px', marginTop: '5px' }}
          checked={checked}
          onChangeChecked={setChecked}
        >
          Remember me?
        </Checkbox>
      </div>

      {error && <div className={s.error}>{error}</div>}
      <div>
        <NavLink to={PATH.PASSWORD_RECOVERY}>Forgot Password?</NavLink>
      </div>
      <Button className={s.button} onClick={onLoginClick}>
        Login
      </Button>
      <p>Don&apos;t have an account?</p>
      <div>
        <NavLink to={PATH.SIGN_UP}>Sign Up</NavLink>
      </div>
    </div>
  );
};

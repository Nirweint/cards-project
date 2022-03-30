import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import s from '../../components/common/styles/Common.module.css';

import { PATH } from 'app/routes/RoutesComponent';
import { InputText, Loading, Button } from 'components';
import { setNewPasswordTC } from 'state/middlewares/forgotPassword';
import { selectAppStatus } from 'state/selectors/app';
import { selectIsSettingNewPasswordSucceeded } from 'state/selectors/forgotPassword';
import { ReturnComponentType } from 'types';

export const NewPasswordEnter = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const { token } = useParams<'token'>();

  const appStatus = useSelector(selectAppStatus);
  const isSettingNewPasswordSucceeded = useSelector(selectIsSettingNewPasswordSucceeded);

  const [newPassword, setNewPassword] = useState<string>('');

  const createNewPasswordHandler = (): void => {
    dispatch(setNewPasswordTC(newPassword, token));
  };

  if (appStatus === 'loading') {
    return <Loading />;
  }

  if (isSettingNewPasswordSucceeded) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div className={s.wrapper}>
      <h2>Create new password</h2>
      <div>
        <InputText placeholder="Password" type="password" onChangeText={setNewPassword} />

        <p>
          Create new password and we will send you
          <br />
          further instructions to email
        </p>
      </div>
      <Button className={s.button} onClick={createNewPasswordHandler}>
        Create new password
      </Button>
    </div>
  );
};

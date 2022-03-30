import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ProfileInfo } from './profileInfo/profileInfo';

import { PATH } from 'app/routes/RoutesComponent';
import { Button } from 'components';
import { LogOutTC } from 'state/middlewares/login';
import { selectIsAuth } from 'state/selectors/auth';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const onLogoutClick = (): void => {
    dispatch(LogOutTC());
  };

  if (!isAuth) {
    return <Navigate replace to={PATH.LOGIN} />;
  }

  return (
    <div>
      <ProfileInfo />
      {isAuth && <Button onClick={onLogoutClick}>Log Out</Button>}
    </div>
  );
};

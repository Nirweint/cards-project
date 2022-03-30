import React from 'react';

import { useSelector } from 'react-redux';

import s from './profileInfo.module.css';
import { ProfileInfoAvatar } from './profileInfoAvatar';
import { ProfileInfoName } from './profileInfoName';

import { Loading } from 'components';
import { selectAppStatus } from 'state/selectors/app';
import { ReturnComponentType } from 'types';

export const ProfileInfo = (): ReturnComponentType => {
  const appStatus = useSelector(selectAppStatus);

  if (appStatus === 'loading') {
    return <Loading />;
  }

  return (
    <div className={s.wrapper}>
      <h2>Personal information</h2>
      <ProfileInfoAvatar />
      <ProfileInfoName />
    </div>
  );
};

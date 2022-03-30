import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import s from './profileInfo.module.css';

import { changeProfileAvatar } from 'state/middlewares/profile';
import { selectProfileAvatar } from 'state/selectors/profile';
import { ReturnComponentType } from 'types';

export const ProfileInfoAvatar = (): ReturnComponentType => {
  const profileAvatar = useSelector(selectProfileAvatar);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [avatar, setAvatar] = useState(profileAvatar);

  const changeTitleAvatar = (e: ChangeEvent<HTMLInputElement>): void => {
    setAvatar(e.currentTarget.value);
  };

  const activateEditModeAvatar = (): void => {
    setEditMode(true);
    setAvatar(avatar);
  };

  const activateViewModeAvatar = (): void => {
    if (avatar) {
      setEditMode(false);
      dispatch(changeProfileAvatar(avatar));
    }
  };

  return (
    <div>
      <div className={s.imgAvatarZone}>
        <img className={s.imgAvatarPic} src={avatar} alt="Avatar" />
      </div>

      {!editMode ? (
        <div onDoubleClick={activateEditModeAvatar}>Avatar url: {profileAvatar}</div>
      ) : (
        <div>
          Avatar url:{' '}
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            value={avatar}
            onChange={changeTitleAvatar}
            onBlur={activateViewModeAvatar}
          />
        </div>
      )}
    </div>
  );
};

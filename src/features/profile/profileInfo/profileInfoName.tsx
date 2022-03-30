import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeProfileName } from 'state/middlewares/profile';
import { selectProfileName } from 'state/selectors/profile';
import { ReturnComponentType } from 'types';

export const ProfileInfoName = (): ReturnComponentType => {
  const profileName = useSelector(selectProfileName);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(profileName);

  const changeTitleName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const activateEditModeName = (): void => {
    setEditMode(true);
    setName(name);
  };

  const activateViewModeName = (): void => {
    if (name) {
      setEditMode(false);
      dispatch(changeProfileName(name));
    }
  };

  return (
    <div>
      {!editMode ? (
        <div onDoubleClick={activateEditModeName}>Name: {profileName}</div>
      ) : (
        <div>
          Name:{' '}
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            value={name}
            onChange={changeTitleName}
            onBlur={activateViewModeName}
          />
        </div>
      )}
    </div>
  );
};

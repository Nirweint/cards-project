import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import s from './App.module.css';
import { Main } from './main';

import { AppError } from 'components';
import { fetchAuthMe } from 'state/middlewares/authMe';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <div className={s.app}>
      <AppError />
      <Main />
    </div>
  );
};

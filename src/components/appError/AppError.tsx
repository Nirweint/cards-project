import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import errorIcon from '../../assets/images/errorIcon.png';

import s from './AppError.module.css';

import { setAppError } from 'state/actions/app';
import { selectAppError } from 'state/selectors/app';
import { ReturnComponentType } from 'types';

const SHOW_ERROR_TIME = 3000;

export const AppError = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const appError = useSelector(selectAppError);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setAppError(null));
      return () => clearTimeout(id);
    }, SHOW_ERROR_TIME);
  }, [appError, dispatch]);

  const showError = appError !== null;

  const wrapperStyle = `${s.wrapper} ${showError ? s.show : ''}`;

  return (
    <div className={wrapperStyle}>
      <div className={s.notification}>
        <img src={errorIcon} alt="err" className={s.errorIcon} />
        <span>Error: {appError}</span>
      </div>
    </div>
  );
};

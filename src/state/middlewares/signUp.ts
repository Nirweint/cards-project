import { setAppError, setAppStatus } from '../actions/app';
import { setSignUpSuccess } from '../actions/auth';
import { ThunkType } from '../types';

import { authAPI } from 'api';

export const signUpThunk =
  (email: string, password: string): ThunkType =>
  dispatch => {
    dispatch(setAppStatus('loading'));
    authAPI
      .signUp(email, password)
      .then(() => {
        dispatch(setAppStatus('succeeded'));
        dispatch(setSignUpSuccess(true));
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        dispatch(setAppError(e.response.data.error));
      });
  };

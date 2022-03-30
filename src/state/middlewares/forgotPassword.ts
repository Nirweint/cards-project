import { setAppError, setAppStatus } from '../actions/app';
import { setNewPasswordSuccess } from '../actions/passwordRecovery';
import { ThunkType } from '../types';

import { authAPI } from 'api';
import { ForgotPasswordDataRequestType } from 'api/authAPI';

export const sendEmailThunk =
  (dataRequest: ForgotPasswordDataRequestType): ThunkType =>
  dispatch => {
    dispatch(setAppStatus('loading'));
    authAPI.forgotPassword(dataRequest).then(() => {
      dispatch(setAppStatus('succeeded'));
    });
  };

export const setNewPasswordTC =
  (newPassword: string, token: string | undefined): ThunkType =>
  dispatch => {
    dispatch(setAppStatus('loading'));
    authAPI
      .setNewPassword(newPassword, token)
      .then(res => {
        if (res.data.info === 'setNewPassword success —ฅ/ᐠ.̫ .ᐟฅ—') {
          dispatch(setNewPasswordSuccess(true));
          dispatch(setAppStatus('succeeded'));
        }
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        const error = e.response ? e.response.data.error : e.message;
        dispatch(setAppError(error));
      });
  };

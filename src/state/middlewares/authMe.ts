import { AxiosResponse } from 'axios';

import { setAppStatus } from '../actions/app';
import { authMeAction } from '../actions/auth';
import { setProfile } from '../actions/profile';
import { ThunkType } from '../types';

import { authAPI } from 'api';
import { LoginResponseType } from 'api/authAPI';

export const fetchAuthMe = (): ThunkType => dispatch => {
  dispatch(setAppStatus('loading'));
  authAPI
    .me()
    .then((res: AxiosResponse<LoginResponseType>) => {
      dispatch(authMeAction(true));
      dispatch(setProfile(res.data));
      dispatch(setAppStatus('succeeded'));
    })
    .catch(() => {
      dispatch(setAppStatus('failed'));
      dispatch(authMeAction(false));
      // const error = e.response ? e.response.data.error : e.message;
    });
};

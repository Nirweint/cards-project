import { AxiosResponse } from 'axios';

import { authAPI, SetNameAvaResponseType, SetNameAvaType } from '../../api/authAPI';
import { setAppStatus } from '../actions/app';
import { setProfile } from '../actions/profile';
import { RootStateType } from '../store';
import { ThunkType } from '../types';

export const changeProfileName =
  (newTitle: string): ThunkType =>
  (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'));
    const profile = getState().profile.profileData;
    if (!profile) {
      return;
    }
    const updatedUser: SetNameAvaType = {
      name: newTitle,
      avatar: profile.avatar,
    };
    authAPI
      .setProfileName(updatedUser)
      .then((res: AxiosResponse<SetNameAvaResponseType>) => {
        dispatch(setProfile(res.data.updatedUser));
        dispatch(setAppStatus('succeeded'));
      });
  };

export const changeProfileAvatar =
  (newTitle: string): ThunkType =>
  (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'));
    const profile = getState().profile.profileData;
    if (!profile) {
      return;
    }
    const updatedUser: SetNameAvaType = {
      name: profile.name,
      avatar: newTitle,
    };
    authAPI
      .setProfileName(updatedUser)
      .then((res: AxiosResponse<SetNameAvaResponseType>) => {
        dispatch(setProfile(res.data.updatedUser));
        dispatch(setAppStatus('succeeded'));
      });
  };

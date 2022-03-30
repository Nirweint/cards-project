import { setAppError, setAppStatus } from '../actions/app';
import { setCurrentPack } from '../actions/packs';
import { RootStateType } from '../store';
import { ThunkType } from '../types';

import { fetchAuthMe } from './authMe';

import { packsAPI } from 'api';

export const getPacksOfCards =
  (): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'));

    // eslint-disable-next-line no-underscore-dangle
    const userId = getState().profile.profileData._id;
    const { showAllPacks } = getState().packs;
    let { params } = getState().packs;

    if (!showAllPacks) {
      params = { ...params, user_id: userId };
    }

    packsAPI
      .getPacks(params)
      .then(res => {
        dispatch(setAppStatus('succeeded'));
        dispatch(setCurrentPack(res.data));
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        const error = e.response ? e.response.data.error : e.message;
        if (error === 'you are not authorized /ᐠ-ꞈ-ᐟ\\') {
          dispatch(fetchAuthMe());
        }
        dispatch(setAppError(error));
      });
  };

export const addPackTC =
  (name: string): ThunkType =>
  dispatch => {
    dispatch(setAppStatus('loading'));
    packsAPI
      .postPack({ name })
      .then(() => {
        dispatch(getPacksOfCards());
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        const error = e.response ? e.response.data.error : e.message;
        dispatch(setAppError(error));
      });
  };

export const deletePackTC =
  (_id: string): ThunkType =>
  dispatch => {
    dispatch(setAppStatus('loading'));
    packsAPI
      .deletePack(_id)
      .then(() => {
        dispatch(getPacksOfCards());
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        const error = e.response ? e.response.data.error : e.message;
        dispatch(setAppError(error));
      });
  };

export const updatePackTC =
  (_id: string, name: string): ThunkType =>
  dispatch => {
    dispatch(setAppStatus('loading'));
    packsAPI
      .updatePack({ _id, name })
      .then(() => {
        dispatch(getPacksOfCards());
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        const error = e.response ? e.response.data.error : e.message;
        dispatch(setAppError(error));
      });
  };

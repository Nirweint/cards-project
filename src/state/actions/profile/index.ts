import { PROFILE_ACTIONS } from './types';

import { LoginResponseType } from 'api/authAPI';

export type SetProfileActionType = ReturnType<typeof setProfile>;
export const setProfile = (payload: LoginResponseType) =>
  ({
    type: PROFILE_ACTIONS.SET_PROFILE,
    payload,
  } as const);

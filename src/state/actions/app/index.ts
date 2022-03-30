import { AppStatusType } from '../../reducers/app';

import { APP_ACTIONS } from './types';

export type SetStatusActionType = ReturnType<typeof setAppStatus>;
export const setAppStatus = (status: AppStatusType) =>
  ({
    type: APP_ACTIONS.SET_STATUS,
    status,
  } as const);

export type SetErrorActionType = ReturnType<typeof setAppError>;
export const setAppError = (error: string | null) =>
  ({
    type: APP_ACTIONS.SET_ERROR,
    error,
  } as const);

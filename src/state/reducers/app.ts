import { APP_ACTIONS, AppActionsType } from '../actions/app/types';

export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppStateType = {
  status: AppStatusType;
  error: string | null;
};

const initState: AppStateType = {
  status: 'idle',
  error: null,
};

export const appReducer = (state = initState, action: AppActionsType): AppStateType => {
  switch (action.type) {
    case APP_ACTIONS.SET_STATUS:
      return { ...state, status: action.status };
    case APP_ACTIONS.SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

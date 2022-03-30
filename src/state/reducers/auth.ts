import { AUTH_ACTIONS, AuthActionsType } from '../actions/auth/types';

export type AuthStateType = {
  auth: boolean;
  signUpSuccess: boolean;
};

const initState = {
  auth: false,
  signUpSuccess: false,
};

export const authReducer = (
  state = initState,
  action: AuthActionsType,
): AuthStateType => {
  switch (action.type) {
    case AUTH_ACTIONS.AUTH_ME_ACTION:
      return { ...state, auth: action.payload };
    case AUTH_ACTIONS.SIGN_UP_SUCCESS:
      return { ...state, signUpSuccess: action.payload };
    default:
      return state;
  }
};

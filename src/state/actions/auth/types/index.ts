import { AuthMeActionType, SetSignUpSuccessType } from '../index';

export enum AUTH_ACTIONS {
  AUTH_ME_ACTION = 'authReducer/AUTH_ME_ACTION',
  SIGN_UP_SUCCESS = 'authReducer/SIGN_UP_SUCCESS',
}

export type AuthActionsType = AuthMeActionType | SetSignUpSuccessType;

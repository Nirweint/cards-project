import { RootStateType } from '../store';

export const selectIsAuth = (state: RootStateType): boolean => state.auth.auth;
export const selectIsSignUpSuccess = (state: RootStateType): boolean =>
  state.auth.signUpSuccess;

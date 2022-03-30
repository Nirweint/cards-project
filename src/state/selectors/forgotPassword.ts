import { RootStateType } from '../store';

export const selectIsSettingNewPasswordSucceeded = (state: RootStateType): boolean =>
  state.passwordRecovery.isSettingNewPasswordSucceeded;

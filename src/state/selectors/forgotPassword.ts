import {RootStateType} from "../store";

export const selectIsSettingNewPasswordSucceeded = (state: RootStateType): boolean => {
    return state.passwordRecovery.isSettingNewPasswordSucceeded
}
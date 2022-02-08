import {RootStateType} from "../store";

export const selectIsAuth = (state: RootStateType): boolean => state.auth.auth
export const selectProfileName = (state: RootStateType): string => state.auth.profileName
export const selectProfileAvatar = (state: RootStateType): string => state.auth.profileAvatar
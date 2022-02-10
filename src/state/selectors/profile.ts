import {RootStateType} from "../store";

export const selectProfileName = (state: RootStateType) => state.profile.profileData?.name
export const selectProfileAvatar = (state: RootStateType) => state.profile.profileData?.avatar
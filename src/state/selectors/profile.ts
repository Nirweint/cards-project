import {RootStateType} from "../store";

export const selectProfileName = (state: RootStateType): string => state.profile.profileData.name
export const selectProfileAvatar = (state: RootStateType): string| undefined => state.profile.profileData.avatar
export const selectProfileId = (state: RootStateType): string => state.profile.profileData._id
import {RootStateType} from "../store";
import {ProfileStateType} from "../reducers/profile";

export const selectProfileState = (state: RootStateType): ProfileStateType => state.profile
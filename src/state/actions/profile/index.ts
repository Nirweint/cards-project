import {PROFILE_ACTIONS} from "./types";
import {LoginResponseType} from "../../../api/api";

export type SetProfileActionType = ReturnType<typeof setProfile>
export const setProfile = (payload: LoginResponseType) => {
    return {
        type: PROFILE_ACTIONS.SET_PROFILE,
        payload,
    } as const
}
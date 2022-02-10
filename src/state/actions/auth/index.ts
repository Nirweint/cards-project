import {AUTH_ACTIONS} from "./types";

export type AuthMeActionType = ReturnType<typeof authMeAction>
export const authMeAction = (payload: boolean) => {
    return {
        type: AUTH_ACTIONS.AUTH_ME_ACTION,
        payload,
    } as const
}
//
// export type SetProfileNameActionType = ReturnType<typeof setProfileNameAction>
// export const setProfileNameAction = (payload: string) => {
//     return {
//         type: AUTH_ACTIONS.SET_PROFILE_NAME,
//         payload,
//     } as const
// }
//
// export type SetProfileAvatarActionType = ReturnType<typeof setProfileAvatarAction>
// export const setProfileAvatarAction = (payload?: string) => {
//     return {
//         type: AUTH_ACTIONS.SET_PROFILE_AVATAR,
//         payload,
//     } as const
// }
import {AUTH_ACTIONS} from "./types";

export type AuthMeActionType = ReturnType<typeof authMeAction>
export const authMeAction = (payload: boolean) => {
    return {
        type: AUTH_ACTIONS.AUTH_ME_ACTION,
        payload,
    } as const
}

export type SetSignUpSuccessType = ReturnType<typeof setSignUpSuccess>
export const setSignUpSuccess = (payload: boolean) => {
    return {
        type: AUTH_ACTIONS.SIGN_UP_SUCCESS,
        payload,
    } as const
}

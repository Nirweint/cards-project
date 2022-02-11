import {PASSWORD_RECOVERY_ACTIONS} from "./types";

export type SetNewPasswordSuccessType = ReturnType<typeof setNewPasswordSuccess>
export const setNewPasswordSuccess = (payload: boolean) => {
    return {
        type: PASSWORD_RECOVERY_ACTIONS.SET_NEW_PASSWORD_SUCCESS,
        payload,
    } as const
}
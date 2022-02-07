import {APP_ACTIONS} from "./types";
import {AppStatusType} from "../../reducers/app";

export type SetStatusActionType = ReturnType<typeof setAppStatus>
export const setAppStatus = (status: AppStatusType) => {
    return {
        type: APP_ACTIONS.SET_STATUS,
        status,
    } as const
}

export type SetErrorActionType = ReturnType<typeof setAppError>
export const setAppError = (error: string | null) => {
    return {
        type: APP_ACTIONS.SET_ERROR,
        error,
    } as const
}
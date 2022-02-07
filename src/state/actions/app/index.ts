import {APP_ACTIONS} from "./types";
import {AppStatusType} from "../../reducers/app";

export type SetStatusActionType = ReturnType<typeof setStatus>
export const setStatus = (status: AppStatusType) => {
    return {
        type: APP_ACTIONS.SET_STATUS,
        status,
    } as const
}
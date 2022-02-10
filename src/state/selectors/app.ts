import {RootStateType} from "../store";
import {AppStatusType} from "../reducers/app";

export const selectAppStatus = (state: RootStateType): AppStatusType => state.app.status
export const selectAppError = (state: RootStateType): string | null => state.app.error
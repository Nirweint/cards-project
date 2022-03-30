import { AppStatusType } from '../reducers/app';
import { RootStateType } from '../store';

export const selectAppStatus = (state: RootStateType): AppStatusType => state.app.status;
export const selectAppError = (state: RootStateType): string | null => state.app.error;

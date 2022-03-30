import { SetErrorActionType, SetStatusActionType } from '../index';

export enum APP_ACTIONS {
  SET_STATUS = 'appReducer/SET_STATUS',
  SET_ERROR = 'appReducer/SET_ERROR',
}

export type AppActionsType = SetStatusActionType | SetErrorActionType;

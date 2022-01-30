import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";
import {RootActionsType} from "../actions";

export type ThunkType = ThunkAction<void, RootStateType, unknown, RootActionsType>
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";
import {ProfileActionsType} from "./profile";
import {AppActionsType} from "./app";

export type ThunkType = ThunkAction<void, RootStateType, unknown, RootActionsType>

export type RootActionsType = ProfileActionsType | AppActionsType

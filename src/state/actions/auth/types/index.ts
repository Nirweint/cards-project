import {AuthMeActionType, SetProfileAvatarActionType, SetProfileNameActionType} from "../index";

export enum AUTH_ACTIONS {
    AUTH_ME_ACTION = "authReducer/AUTH_ME_ACTION",
    SET_PROFILE_NAME = "authReducer/SET_PROFILE_NAME",
    SET_PROFILE_AVATAR = "authReducer/SET_PROFILE_AVATAR",
}

export type AuthActionsType =
    AuthMeActionType
    | SetProfileNameActionType
    | SetProfileAvatarActionType

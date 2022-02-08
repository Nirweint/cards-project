import {AUTH_ACTIONS, AuthActionsType} from "../actions/auth/types";

export type AuthStateType = typeof initState

const initState = {
    auth: false,
    profileName: '',
    profileAvatar: '',
}

export const authReducer = (state = initState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case AUTH_ACTIONS.AUTH_ME_ACTION:
            return {...state, auth: action.payload}
        case AUTH_ACTIONS.SET_PROFILE_NAME:
            return {...state, profileName: action.payload}
        case AUTH_ACTIONS.SET_PROFILE_AVATAR:
            return {...state, profileAvatar: action.payload}
        default:
            return state;
    }
}
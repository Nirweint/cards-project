import {AUTH_ACTIONS, AuthActionsType} from "../actions/auth/types";

export type AuthStateType = typeof initState

const initState = {
    auth: false
}

export const authReducer = (state = initState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case AUTH_ACTIONS.AUTH_ME_ACTION:
            return {...state, auth: action.payload}
        default:
            return state;
    }
}
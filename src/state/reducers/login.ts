import {LOGIN_ACTIONS, LoginActionsType} from "../actions/login/types";

export type LoginStateType = {}

const initState: LoginStateType = {}

export const loginReducer = (state = initState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case LOGIN_ACTIONS.SOME_ACTION:
            return {...state}

        default:
            return state;
    }
}
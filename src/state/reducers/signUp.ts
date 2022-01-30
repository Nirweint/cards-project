import {SIGN_UP_ACTIONS, SignUpActionsType} from "../actions/signUp/types";

export type SignUpStateType = {}

const initState: SignUpStateType = {}

export const signUpReducer = (state = initState, action: SignUpActionsType): SignUpStateType => {
    switch (action.type) {
        case SIGN_UP_ACTIONS.SOME_ACTION:
            return {...state}

        default:
            return state;
    }
}
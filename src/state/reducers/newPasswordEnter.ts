import {
    NEW_PASSWORD_ENTER_ACTIONS,
    NewPasswordEnterActionsType
} from "../actions/newPasswordEnter/types";

export type NewPasswordEnterStateType = {}

const initState: NewPasswordEnterStateType = {}

export const newPasswordEnterReducer = (state = initState, action: NewPasswordEnterActionsType): NewPasswordEnterStateType => {
    switch (action.type) {
        case NEW_PASSWORD_ENTER_ACTIONS.SOME_ACTION:
            return {...state}

        default:
            return state;
    }
}
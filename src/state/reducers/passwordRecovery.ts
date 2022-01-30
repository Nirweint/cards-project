import {
    PASSWORD_RECOVERY_ACTIONS,
    PasswordRecoveryActionsType
} from "../actions/passwordRecovery/types";

export type PasswordRecoveryStateType = {}

const initState: PasswordRecoveryStateType = {}

export const passwordRecoveryReducer = (state = initState, action: PasswordRecoveryActionsType): PasswordRecoveryStateType => {
    switch (action.type) {
        case PASSWORD_RECOVERY_ACTIONS.SOME_ACTION:
            return {...state}

        default:
            return state;
    }
}
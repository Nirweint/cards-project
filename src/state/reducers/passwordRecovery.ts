import {
    PASSWORD_RECOVERY_ACTIONS,
    PasswordRecoveryActionsType
} from "../actions/passwordRecovery/types";

export type PasswordRecoveryStateType = {
    isSettingNewPasswordSucceeded: boolean
}

const initState: PasswordRecoveryStateType = {
    isSettingNewPasswordSucceeded: false,
}

export const passwordRecoveryReducer = (state = initState, action: PasswordRecoveryActionsType): PasswordRecoveryStateType => {
    switch (action.type) {
        case PASSWORD_RECOVERY_ACTIONS.SET_NEW_PASSWORD_SUCCESS:
            return {...state, isSettingNewPasswordSucceeded: action.payload}

        default:
            return state;
    }
}
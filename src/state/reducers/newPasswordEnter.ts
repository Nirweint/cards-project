import {NEW_PASSWORD_ENTER_ACTIONS, NewPasswordEnterActionsType} from "../actions/newPasswordEnter/types";
import {authAPI} from "../../api";
import {Dispatch} from "redux";

export type NewPasswordEnterStateType = {}

const initState: NewPasswordEnterStateType = {};

export const newPasswordEnterReducer = (state = initState, action: NewPasswordEnterActionsType): NewPasswordEnterStateType => {
    switch (action.type) {
        case NEW_PASSWORD_ENTER_ACTIONS.SOME_ACTION:
            return {...state};
        // case NEW_PASSWORD_ENTER_ACTIONS.SET_NEW_PASSWORD:
        //     return {...state};
        default:
            return state;
    }
};

export const setNewPasswordErrorAC = (message: string | undefined) => {
    return { type: "NEW_PASSWORD_ENTER_ACTIONS/SET_NEW_PASSWORD", message } as const
};

export const setNewPasswordTC = (newPassword: string, token: string | undefined) => (dispatch: Dispatch<ReturnType<typeof setNewPasswordErrorAC>>) => {
    authAPI.setNewPassword(newPassword, token)
        .then( res => {
            console.log(res.data)
            // dispatch(setNewPasswordErrorAC(res.data.error))
        })
        .catch( res => {
            console.log(res.data.error)
            dispatch(setNewPasswordErrorAC(res.data.error))
        })
};

import {AppAction, AppActionsType, AppStateType} from "../types/app";

const initState: AppStateType = {}

export const appReducer = (state = initState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case AppAction.SOME_ACTION:
            return {...state}

        default:
            return state;
    }
}
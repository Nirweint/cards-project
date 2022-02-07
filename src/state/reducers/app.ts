import {APP_ACTIONS, AppActionsType} from "../actions/app/types";

export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppStateType = {
    status: AppStatusType
}

const initState: AppStateType = {
    status: 'idle'
}

export const appReducer = (state = initState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case APP_ACTIONS.SET_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}
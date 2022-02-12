import {PACKS_ACTIONS, PacksActionsType} from "../actions/packs/types";

export type packsReducerStateType = {}

const initState: packsReducerStateType = {}

export const packsReducer = (state = initState, action: PacksActionsType): packsReducerStateType => {
    switch (action.type) {
        case PACKS_ACTIONS.SOME_ACTION:
            return {...state}

        default:
            return state;
    }
}
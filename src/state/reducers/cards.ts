import {CARDS_ACTIONS, CardsActionsType} from "../actions/cards/types";

export type cardsReducerStateType = {}

const initState: cardsReducerStateType = {}

export const cardsReducer = (state = initState, action: CardsActionsType): cardsReducerStateType => {
    switch (action.type) {
        case CARDS_ACTIONS.SOME_ACTION:


        default:
            return state;
    }
}
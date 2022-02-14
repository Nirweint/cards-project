import {CARDS_ACTIONS, CardsActionsType} from "../actions/cards/types";
import {ShopTableType} from "../../api/cardsAPI";

export type cardsReducerStateType = {
    cardPacks: ShopTableType[]
}

const initState: cardsReducerStateType = {
    cardPacks: []
}

export const cardsReducer = (state = initState, action: CardsActionsType): cardsReducerStateType => {
    switch (action.type) {
        case CARDS_ACTIONS.SOME_ACTION:
            return {...state, cardPacks: state.cardPacks.map(card => ({...action.payload}))}
        default:
            return state;
    }
}
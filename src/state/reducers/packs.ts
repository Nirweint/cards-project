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

// types
export type PacksType = {
    cardPacks: CardsPackType[]
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}

export type CardsPackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
}
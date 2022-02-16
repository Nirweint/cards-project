import {PACKS_ACTIONS, PacksActionsType} from "../actions/packs/types";

export type packsReducerStateType = {
    page: number,
    pageCount: number,
    cardPacksTotalCount: number,
}


const initState: packsReducerStateType = {
    page: 1,
    pageCount: 100,
    cardPacksTotalCount: 0,
}

export const packsReducer = (state = initState, action: PacksActionsType): packsReducerStateType => {
    switch (action.type) {
        case PACKS_ACTIONS.SET_PACKS_TOTAL_COUNT:
            return {...state, cardPacksTotalCount: action.packsTotalCount}
        case PACKS_ACTIONS.SET_CURRENT_PAGE:
            return {...state, page:action.page}
        case PACKS_ACTIONS.SET_PAGE_COUNT:
            return {...state, pageCount: action.pageCount}
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
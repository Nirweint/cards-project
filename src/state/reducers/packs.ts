import {PACKS_ACTIONS, PacksActionsType} from "../actions/packs/types";
import {CardPacksParamsType} from "../../api/packsAPI";
import {CARDS_ACTIONS} from "../actions/cards/types";

export type packsReducerStateType = {
    pack: PacksType,
    params: CardPacksParamsType,
    showAllPacks: boolean
}


const initState: packsReducerStateType = {
    pack: {
        cardPacks: [],
        cardPacksTotalCount: 0,
        maxCardsCount: 103,
        minCardsCount: 0,
        page: 1,
        pageCount: 4,
    },
    params: {
        packName: '',
        min: 3,
        max: 9,
        sortPacks: '0updated',
        page: 1,
        pageCount: 10,
        user_id: '',
    },
    showAllPacks: true,
}

export const packsReducer = (state = initState, action: PacksActionsType): packsReducerStateType => {
    switch (action.type) {
        case PACKS_ACTIONS.SET_CURRENT_PACK:
            return {...state, pack: action.payload}
        case PACKS_ACTIONS.SET_CURRENT_PAGE:
            return {...state, params: {...state.params, page: action.payload}}
        case PACKS_ACTIONS.SET_SHOW_ALL_PACKS:
            return {...state, showAllPacks: action.payload}
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
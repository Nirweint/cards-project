import {PACKS_ACTIONS, PacksActionsType} from "../actions/packs/types";
import {CardPacksParamsType} from "../../api/packsAPI";

export type packsReducerStateType = {
    pack: PacksType,
    params: CardPacksParamsType,
    showAllPacks: boolean,
    minRangeValue: number,
    maxRangeValue: number,
    selectQuantityItems: number,
}


const initState: packsReducerStateType = {
    pack: {
        cardPacks:[],
        cardPacksTotalCount: 0,
        maxCardsCount: 100,
        minCardsCount: 0,
        page: 1,
        pageCount: 4,
    },
    params: {
        packName: '',
        min: 0,
        max: 9,
        sortPacks: '0updated',
        page: 1,
        pageCount: 5,
        user_id: '',
    },
    showAllPacks: true,
    minRangeValue: 0,
    maxRangeValue: 103,
    selectQuantityItems: 5,
}

export const packsReducer = (state = initState, action: PacksActionsType): packsReducerStateType => {
    switch (action.type) {
        case PACKS_ACTIONS.SET_CURRENT_PACK:
            return {...state, pack: action.payload}
        case PACKS_ACTIONS.SET_CURRENT_PAGE:
            return {...state, params: {...state.params, page: action.payload}}
        case PACKS_ACTIONS.SET_SHOW_ALL_PACKS:
            return {...state, showAllPacks: action.payload}
        case PACKS_ACTIONS.SET_MIN_VALUE:
            return {...state, params: {...state.params, min: action.payload}}
        case PACKS_ACTIONS.SET_MAX_VALUE:
            return {...state, params: {...state.params, max: action.payload}}
        case PACKS_ACTIONS.SET_PAGE_SIZE:
            return {...state, selectQuantityItems: action.payload, params: {...state.params, pageCount: action.payload}}
        case PACKS_ACTIONS.SEARCH_PACK:
            return {...state, params: {...state.params, packName: action.payload}}
        case PACKS_ACTIONS.SORT_PACKS_NAME:
            return {...state, params: {...state.params, sortPacks: action.payload}}
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
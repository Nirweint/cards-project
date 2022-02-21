import {CARDS_ACTIONS, CardsActionsType} from "../actions/cards/types";
import {CardsParamsType} from "../../api/cardsAPI";

export type cardsReducerStateType = {
    cardsPack: CardsPackType
    params: Omit<CardsParamsType, 'cardsPack_id'>
    currentCardsPack_id: string
}

const initState: cardsReducerStateType = {
    cardsPack: {
        cards: [],
        cardsTotalCount: 5,
        maxGrade: 6,
        minGrade: 0,
        page: 1,
        pageCount: 1000,
        packUserId: '60141d7ef8f3eb00042c7c40',
    },
    params: {
        pageCount: 10,
        page: 1,
        max: 1000,
        cardAnswer: 'cardAnswer',
        cardQuestion: 'cardQuestion',
        sortCards: '',
        min: 0,
    },
    currentCardsPack_id: '',
}

export const cardsReducer = (state = initState, action: CardsActionsType): cardsReducerStateType => {
    switch (action.type) {
        case CARDS_ACTIONS.SET_CARDS_PACK:
            return {...state, cardsPack: action.payload}
        case CARDS_ACTIONS.SET_CARDS_CURRENT_ID:
            return {...state, currentCardsPack_id: action.payload}
        case CARDS_ACTIONS.SET_CURRENT_CARDS_PAGE:
            return {...state, params: {...state.params, page: action.payload}}
        default:
            return state;
    }
}

// types
export type CardsPackType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}
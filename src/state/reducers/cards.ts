import {CARDS_ACTIONS, CardsActionsType} from "../actions/cards/types";

export type cardsReducerStateType = {
    cardPack: CardPacksType
}

const initState: cardsReducerStateType = {
    cardPack: {
        cards: [],
        cardsTotalCount: 0,
        maxGrade: 0,
        minGrade: 0,
        page: 0,
        pageCount: 0,
        packUserId: '',
    }
}

export const cardsReducer = (state = initState, action: CardsActionsType): cardsReducerStateType => {
    switch (action.type) {
        case CARDS_ACTIONS.SOME_ACTION:
            return {...state, cardPack: action.payload}
        default:
            return state;
    }
}

// types
export type CardPacksType = {
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
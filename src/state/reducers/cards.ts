import {CARDS_ACTIONS, CardsActionsType} from "../actions/cards/types";

export type cardsReducerStateType = {
    cardPack: CardPacksType
}

const initState: cardsReducerStateType = {
    cardPack: {
        cards:[
            {
                "_id":"60141efcf8f3eb00042c7c49",
                "cardsPack_id":"60141e54f8f3eb00042c7c44",
                "user_id":"60141d7ef8f3eb00042c7c40",
                "answer":"false",
                "question":"null == false",
                "grade":4.54654,
                "shots":0,
                "created":"2021-01-29T14:43:08.447Z",
                "updated":"2021-01-29T14:43:08.447Z",
            },
            {
                "_id":"60141ee4f8f3eb00042c7c48",
                "cardsPack_id":"60141e54f8f3eb00042c7c44",
                "user_id":"60141d7ef8f3eb00042c7c40",
                "answer":"false",
                "question":"!!null",
                "grade":4.54654,
                "shots":0,
                "created":"2021-01-29T14:42:44.085Z",
                "updated":"2021-01-29T14:42:44.085Z",
            },
            {
                "_id":"60141ec4f8f3eb00042c7c47",
                "cardsPack_id":"60141e54f8f3eb00042c7c44",
                "user_id":"60141d7ef8f3eb00042c7c40",
                "answer":"'FooNan'",
                "question":"'Foo' + + 'bar'",
                "grade":4.54654,
                "shots":0,
                "created":"2021-01-29T14:42:12.650Z",
                "updated":"2021-01-29T14:42:12.650Z",
            },
            {
                "_id":"60141e9af8f3eb00042c7c46",
                "cardsPack_id":"60141e54f8f3eb00042c7c44",
                "user_id":"60141d7ef8f3eb00042c7c40",
                "answer":"true",
                "question":"!!'false' === !!'true'",
                "grade":4.54654,
                "shots":0,
                "created":"2021-01-29T14:41:30.069Z",
                "updated":"2021-01-29T14:41:30.069Z",
            },
            {
                "_id":"60141e88f8f3eb00042c7c45",
                "cardsPack_id":"60141e54f8f3eb00042c7c44",
                "user_id":"60141d7ef8f3eb00042c7c40",
                "answer":"true",
                "question":"!!'false' == !!'true'",
                "grade":4.54654,
                "shots":0,
                "created":"2021-01-29T14:41:12.015Z",
                "updated":"2021-01-29T14:41:12.015Z",
            }
        ],
        cardsTotalCount: 5,
        maxGrade: 6,
        minGrade: 0,
        page: 1,
        pageCount: 1000,
        packUserId: '60141d7ef8f3eb00042c7c40',
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
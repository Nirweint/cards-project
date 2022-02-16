import {PACKS_ACTIONS, PacksActionsType} from "../actions/packs/types";

export type packsReducerStateType = {
    pack: PacksType
}


const initState: packsReducerStateType = {
    pack: {
        cardPacks:[
            {
            "_id": "620c180ce12228000414378b",
            "user_id": "6206a327b34eb500049eef80",
            "name": "MyNew",
            "cardsCount": 0,
           "created": "2022-02-15T21:15:56.261Z",
            "updated": "2022-02-15T21:32:24.508Z",
            },
            {
                "_id": "620c1af2e122280004143796",
                "user_id": "61e6cab5914b1230a0a73254",
                "name": "10",
                "cardsCount": 0,
                "created": "2022-02-15T21:28:18.341Z",
                "updated": "2022-02-15T21:28:18.341Z",
            },
            {
                "_id": "620c1adce122280004143792",
                "user_id": "61e6cab5914b1230a0a73254",
                "name": "6",
                "cardsCount": 0,
                "created": "2022-02-15T21:27:56.538Z",
                "updated": "2022-02-15T21:27:56.538Z",
            },
            {
                "_id": "620c1acae122280004143790",
                "user_id": "61e6cab5914b1230a0a73254",
                "name": "4",
                "cardsCount": 0,
                "created": "2022-02-15T21:27:38.337Z",
                "updated": "2022-02-15T21:27:38.337Z",
            },
        ],
        cardPacksTotalCount: 4088,
        maxCardsCount: 103,
        minCardsCount: 0,
        page: 1,
        pageCount: 4,
    }
}

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
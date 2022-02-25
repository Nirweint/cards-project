import {instance} from "./config";
import {CardsPackType} from "../state/reducers/cards";

export const cardsAPI = {
    getCards(payload: CardsParamsType) {
        return instance.get<CardsPackType>('cards/card', {params: payload})
    },
    postCard(card: PostCardDataType) {
        return instance.post('cards/card', {card})
    },
    deleteCard(cardId: string) {
        return instance.delete(`cards/card?id=${cardId}`)
    },
    updateCard(card: UpdateCardType) {
        return instance.put('cards/card', {card})
    },
    updateCardGrade(payload: UpgradeCardGradePayloadType) {
        return instance.put('cards/grade', payload)
    },
}

// types
export type CardsParamsType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: string // '0grade' или '1grade'
    page?: number
    pageCount: number
}

export type PostCardDataType = {
    cardsPack_id: string
    answer?: string
    question?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
}

export type UpdateCardType = {
    _id: string
    question: string
    answer: string
}

export type UpgradeCardGradePayloadType = {
    grade: number
    card_id: string
}
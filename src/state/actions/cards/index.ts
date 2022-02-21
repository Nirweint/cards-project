import {CARDS_ACTIONS} from "./types";
import {CardsPackType} from "../../reducers/cards";

export type SetCardsPackType = ReturnType<typeof setCardsPack>
export const setCardsPack = (payload: CardsPackType) => {
    return {
        type: CARDS_ACTIONS.SET_CARDS_PACK,
        payload,
    } as const
}

export type SetCardsCurrentIdPackType = ReturnType<typeof setCardsCurrentId>
export const setCardsCurrentId = (payload: string) => {
    return {
        type: CARDS_ACTIONS.SET_CARDS_CURRENT_ID,
        payload,
    } as const
}

export type SetCurrentCardsPageType = ReturnType<typeof setCurrentCardsPage>
export const setCurrentCardsPage = (payload: number) => {
    return {
        type: CARDS_ACTIONS.SET_CURRENT_CARDS_PAGE,
        payload,
    } as const
}
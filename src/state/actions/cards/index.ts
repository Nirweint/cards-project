import {CARDS_ACTIONS} from "./types";
import {ShopTableType} from "../../../api/cardsAPI";

export type SomeActionCardsType = ReturnType<typeof someActionCards>

export const someActionCards = (payload: ShopTableType) => {
    return {
        type: CARDS_ACTIONS.SOME_ACTION,
        payload,
    } as const
}
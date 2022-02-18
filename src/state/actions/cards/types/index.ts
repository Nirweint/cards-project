import {SetCardsCurrentIdPackType, SetCardsPackType} from "../index";

export enum CARDS_ACTIONS {
    SET_CARDS_PACK = "cardsReducer/SET_CARDS_PACK",
    SET_CARDS_CURRENT_ID = "cardsReducer/SET_CARDS_CURRENT_ID",
}

export type CardsActionsType =
    SetCardsPackType
    | SetCardsCurrentIdPackType


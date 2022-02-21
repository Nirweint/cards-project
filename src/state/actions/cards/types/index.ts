import {
    SearchCardType,
    SetCardsCurrentIdPackType,
    SetCardsPackType,
    SetCurrentCardsPageType
} from "../index";

export enum CARDS_ACTIONS {
    SET_CARDS_PACK = "cardsReducer/SET_CARDS_PACK",
    SET_CARDS_CURRENT_ID = "cardsReducer/SET_CARDS_CURRENT_ID",
    SET_CURRENT_CARDS_PAGE = "cardsReducer/SET_CURRENT_CARDS_PAGE",
    SEARCH_CARD = "cardsReducer/SEARCH_CARD",
}

export type CardsActionsType =
    SetCardsPackType
    | SetCardsCurrentIdPackType
    | SetCurrentCardsPageType
    | SearchCardType


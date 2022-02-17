import {
    SetCurrentPackType, SetCurrentPageType,
} from "../index";

export enum PACKS_ACTIONS {
    SET_CURRENT_PACK = "packsReducer/SET_CURRENT_PACK",
    SET_CURRENT_PAGE = "packsReducer/SET_CURRENT_PAGE",
}

export type PacksActionsType =
    | SetCurrentPackType
    | SetCurrentPageType
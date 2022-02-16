import {
    SetCurrentPackType,
    SetCurrentPageType,
    SetPageCountType,
    SetTotalCountPacksType
} from "../index";

export enum PACKS_ACTIONS {
    SET_PACKS_TOTAL_COUNT = "packsReducer/SET_PACKS_TOTAL_COUNT",
    SET_CURRENT_PAGE = "packsReducer/SET_CURRENT_PAGE",
    SET_PAGE_COUNT = "packsReducer/SET_PAGE_COUNT",
    SET_CURRENT_PACK = "packsReducer/SET_CURRENT_PACK",
}

export type PacksActionsType =
    | SetTotalCountPacksType
    | SetCurrentPageType
    | SetPageCountType
    | SetCurrentPackType
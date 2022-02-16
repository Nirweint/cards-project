import {SetCurrentPageType, SetPageCountType, SetTotalCountPacksType} from "../index";

export enum PACKS_ACTIONS {
    SET_PACKS_TOTAL_COUNT = "packsReducer/SET_PACKS_TOTAL_COUNT",
    SET_CURRENT_PAGE = "packsReducer/SET_CURRENT_PAGE",
    SET_PAGE_COUNT = "packsReducer/SET_PAGE_COUNT",
}

export type PacksActionsType =
    | SetTotalCountPacksType
    | SetCurrentPageType
    | SetPageCountType
import {SetCurrentPackType, SetCurrentPageType, SetShowAllPacksType,} from "../index";

export enum PACKS_ACTIONS {
    SET_CURRENT_PACK = "packsReducer/SET_CURRENT_PACK",
    SET_CURRENT_PAGE = "packsReducer/SET_CURRENT_PAGE",
    SET_SHOW_ALL_PACKS = "packsReducer/SET_SHOW_ALL_PACKS",

}

export type PacksActionsType =
    | SetCurrentPackType
    | SetCurrentPageType
    | SetShowAllPacksType
import {PACKS_ACTIONS} from "./types";
import {PacksType} from "../../reducers/packs";


export type SetCurrentPackType = ReturnType<typeof setCurrentPack>
export const setCurrentPack = (payload: PacksType) => {
    return {
        type: PACKS_ACTIONS.SET_CURRENT_PACK,
        payload,
    } as const
}

export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (payload: number) => {
    return {
        type: PACKS_ACTIONS.SET_CURRENT_PAGE,
        payload,
    } as const
}

export type SetShowAllPacksType = ReturnType<typeof setShowAllPacks>
export const setShowAllPacks = (payload: boolean) => {
    return {
        type: PACKS_ACTIONS.SET_SHOW_ALL_PACKS,
        payload,
    } as const
}
import {PACKS_ACTIONS} from "./types";
import {PacksType} from "../../reducers/packs";

export type SetTotalCountPacksType = ReturnType<typeof setTotalCountPacks>
export const setTotalCountPacks = (totalCountPacks: number) => {
    return {
        type: PACKS_ACTIONS.SET_PACKS_TOTAL_COUNT,
        packsTotalCount: totalCountPacks,
    } as const
}

export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: PACKS_ACTIONS.SET_CURRENT_PAGE,
        page: currentPage,
    } as const
}

export type SetPageCountType = ReturnType<typeof setPageCount>
export const setPageCount = (pageCount: number) => {
    return {
        type: PACKS_ACTIONS.SET_PAGE_COUNT,
        pageCount: pageCount,
    } as const
}

export type SetCurrentPackType = ReturnType<typeof setCurrentPack>
export const setCurrentPack = (payload: PacksType) => {
    return {
        type: PACKS_ACTIONS.SET_CURRENT_PACK,
        payload,
    } as const
}
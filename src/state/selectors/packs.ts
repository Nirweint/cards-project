import {RootStateType} from "../store";

export const selectPacksTotalCount = (state: RootStateType): number => state.packs.cardPacksTotalCount
export const selectPageCount = (state: RootStateType): number => state.packs.pageCount
export const selectCurrentPage = (state: RootStateType): number => state.packs.page

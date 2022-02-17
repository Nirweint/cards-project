import {RootStateType} from "../store";
import {CardsPackType} from "../reducers/packs";

export const selectPacksTotalCount = (state: RootStateType): number => state.packs.pack.cardPacksTotalCount
export const selectPageCount = (state: RootStateType): number => state.packs.pack.pageCount
export const selectCurrentPage = (state: RootStateType): number => state.packs.params.page
export const selectCardPacks = (state: RootStateType): CardsPackType[] => state.packs.pack.cardPacks

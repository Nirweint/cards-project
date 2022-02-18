import {RootStateType} from "../store";
import {CardsPackType} from "../reducers/packs";

export const selectPacksTotalCount = (state: RootStateType): number => state.packs.pack.cardPacksTotalCount
export const selectPageCount = (state: RootStateType): number => state.packs.pack.pageCount
export const selectCardPacks = (state: RootStateType): CardsPackType[] => state.packs.pack.cardPacks
export const selectCurrentPage = (state: RootStateType) => state.packs.params.page
export const selectMinCardCount = (state: RootStateType) => state.packs.params.min
export const selectMaxCardCount = (state: RootStateType) => state.packs.params.max

export const selectMinCardCountFromState = (state: RootStateType): number => state.packs.pack.minCardsCount
export const selectMaxCardCountFromState = (state: RootStateType): number => state.packs.pack.maxCardsCount

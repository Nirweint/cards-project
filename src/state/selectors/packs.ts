import { CardsPackType } from '../reducers/packs';
import { RootStateType } from '../store';

export const selectPacksTotalCount = (state: RootStateType): number =>
  state.packs.pack.cardPacksTotalCount;
export const selectPageCount = (state: RootStateType): number =>
  state.packs.pack.pageCount;
export const selectCardPacks = (state: RootStateType): CardsPackType[] =>
  state.packs.pack.cardPacks;
export const selectShowAllPacks = (state: RootStateType): boolean =>
  state.packs.showAllPacks;
export const selectCurrentPage = (state: RootStateType): number | undefined =>
  state.packs.params.page;
export const selectMinCardCount = (state: RootStateType): number | undefined =>
  state.packs.params.min;
export const selectMaxCardCount = (state: RootStateType): number | undefined =>
  state.packs.params.max;
export const selectPageSize = (state: RootStateType): number | undefined =>
  state.packs.params.pageCount;
export const selectMinCardCountFromState = (state: RootStateType): number =>
  state.packs.minRangeValue;
export const selectMaxCardCountFromState = (state: RootStateType): number =>
  state.packs.maxRangeValue;
export const selectSelectQuantityItems = (state: RootStateType): number =>
  state.packs.selectQuantityItems;
export const selectSearchPack = (state: RootStateType): string | undefined =>
  state.packs.params.packName;
export const selectSortPacks = (
  state: RootStateType,
): '0updated' | '1updated' | undefined => state.packs.params.sortPacks;

import { PacksType } from '../../reducers/packs';

import { PACKS_ACTIONS } from './types';

export type SetCurrentPackType = ReturnType<typeof setCurrentPack>;
export const setCurrentPack = (payload: PacksType) =>
  ({
    type: PACKS_ACTIONS.SET_CURRENT_PACK,
    payload,
  } as const);

export type SetCurrentPageType = ReturnType<typeof setCurrentPage>;
export const setCurrentPage = (payload: number) =>
  ({
    type: PACKS_ACTIONS.SET_CURRENT_PAGE,
    payload,
  } as const);

export type SetMinValueType = ReturnType<typeof setMinValue>;
export const setMinValue = (payload: number) =>
  ({
    type: PACKS_ACTIONS.SET_MIN_VALUE,
    payload,
  } as const);
export type SetMaxValueType = ReturnType<typeof setMaxValue>;
export const setMaxValue = (payload: number) =>
  ({
    type: PACKS_ACTIONS.SET_MAX_VALUE,
    payload,
  } as const);

export type SetShowAllPacksType = ReturnType<typeof setShowAllPacks>;
export const setShowAllPacks = (payload: boolean) =>
  ({
    type: PACKS_ACTIONS.SET_SHOW_ALL_PACKS,
    payload,
  } as const);

export type SetPageSizeType = ReturnType<typeof setPageSize>;
export const setPageSize = (payload: number) =>
  ({
    type: PACKS_ACTIONS.SET_PAGE_SIZE,
    payload,
  } as const);

export type SearchPackType = ReturnType<typeof setSearchPack>;
export const setSearchPack = (payload: string) =>
  ({
    type: PACKS_ACTIONS.SEARCH_PACK,
    payload,
  } as const);
export type SortPacksNameType = ReturnType<typeof SortPacksName>;
export const SortPacksName = (payload: '0updated' | '1updated') =>
  ({
    type: PACKS_ACTIONS.SORT_PACKS_NAME,
    payload,
  } as const);

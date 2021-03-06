import {
  SearchPackType,
  SetCurrentPackType,
  SetCurrentPageType,
  SetMaxValueType,
  SetMinValueType,
  SetPageSizeType,
  SetShowAllPacksType,
  SortPacksNameType,
} from '../index';

export enum PACKS_ACTIONS {
  SET_CURRENT_PACK = 'packsReducer/SET_CURRENT_PACK',
  SET_CURRENT_PAGE = 'packsReducer/SET_CURRENT_PAGE',
  SET_SHOW_ALL_PACKS = 'packsReducer/SET_SHOW_ALL_PACKS',
  SET_MIN_VALUE = 'packsReducer/SET_MIN_VALUE',
  SET_MAX_VALUE = 'packsReducer/SET_MAX_VALUE',
  SET_PAGE_SIZE = 'packsReducer/SET_PAGE_SIZE',
  SEARCH_PACK = 'packsReducer/SEARCH_PACK',
  SORT_PACKS_NAME = 'packsReducer/SORT_PACKS_NAME',
}

export type PacksActionsType =
  | SetCurrentPackType
  | SetCurrentPageType
  | SetShowAllPacksType
  | SetMinValueType
  | SetMaxValueType
  | SetPageSizeType
  | SearchPackType
  | SortPacksNameType;

import { CardsPackType } from '../../reducers/cards';

import { CARDS_ACTIONS } from './types';

export type SetCardsPackType = ReturnType<typeof setCardsPack>;
export const setCardsPack = (payload: CardsPackType) =>
  ({
    type: CARDS_ACTIONS.SET_CARDS_PACK,
    payload,
  } as const);

export type SetCardsCurrentIdPackType = ReturnType<typeof setCardsCurrentId>;
export const setCardsCurrentId = (payload: string) =>
  ({
    type: CARDS_ACTIONS.SET_CARDS_CURRENT_ID,
    payload,
  } as const);

export type SetCurrentCardsPageType = ReturnType<typeof setCurrentCardsPage>;
export const setCurrentCardsPage = (payload: number) =>
  ({
    type: CARDS_ACTIONS.SET_CURRENT_CARDS_PAGE,
    payload,
  } as const);

export type SearchCardType = ReturnType<typeof setSearchCard>;
export const setSearchCard = (payload: string) =>
  ({
    type: CARDS_ACTIONS.SEARCH_CARD,
    payload,
  } as const);

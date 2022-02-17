import {RootStateType} from "../store";
import {CardType} from "../reducers/cards";

export const selectListOfCards = (state: RootStateType): CardType[] => state.cards.cardsPack.cards
export const selectCardsTotalCount = (state: RootStateType): number => state.cards.cardsPack.cardsTotalCount

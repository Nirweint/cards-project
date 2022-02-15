import {RootStateType} from "../store";
import {CardType} from "../reducers/cards";

export const selectListOfCards = (state: RootStateType): CardType[] => state.cards.cardsPack.cards

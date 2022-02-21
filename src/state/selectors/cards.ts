import {RootStateType} from "../store";
import {CardType} from "../reducers/cards";
import {CardsParamsType} from "../../api/cardsAPI";

export const selectListOfCards = (state: RootStateType): CardType[] => state.cards.cardsPack.cards
export const selectCardsTotalCount = (state: RootStateType): number => state.cards.cardsPack.cardsTotalCount
export const selectCurrentCardsPacksId = (state: RootStateType): string => state.cards.cardsPack.packUserId
export const selectCardsPackParams = (state: RootStateType): Omit<CardsParamsType, "cardsPack_id"> => state.cards.params

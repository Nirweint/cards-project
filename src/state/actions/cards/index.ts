import {CARDS_ACTIONS} from "./types";

export type SomeActionCardsType = ReturnType<typeof someActionCards>
export const someActionCards = () => {
    return {
        type: CARDS_ACTIONS.SOME_ACTION,
    } as const
}
import {PACKS_ACTIONS} from "./types";

export type SomeActionPacksType = ReturnType<typeof someActionPacks>
export const someActionPacks = () => {
    return {
        type: PACKS_ACTIONS.SOME_ACTION,
    } as const
}
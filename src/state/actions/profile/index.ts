import {PROFILE_ACTIONS} from "./types";

export type SomeProfileActionType = ReturnType<typeof someActionProfile>
export const someActionProfile = () => {
    return {
        type: PROFILE_ACTIONS.SOME_ACTION
    } as const
}
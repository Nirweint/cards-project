import {ProfileAction} from "../types/profile";

export type SomeActionType = ReturnType<typeof someActionProfile>
export const someActionProfile = () => {
    return {
        type: ProfileAction.SOME_ACTION
    } as const
}
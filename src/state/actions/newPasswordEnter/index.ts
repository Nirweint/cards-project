import {NEW_PASSWORD_ENTER_ACTIONS} from "./types";

export type SomeNewPasswordEnterActionType = ReturnType<typeof someActionNewPasswordEnter>
export const someActionNewPasswordEnter = () => {
    return {
        type: NEW_PASSWORD_ENTER_ACTIONS.SOME_ACTION
    } as const
}
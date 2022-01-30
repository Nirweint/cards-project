import {LOGIN_ACTIONS} from "./types";

export type SomeLoginActionType = ReturnType<typeof someActionLogin>
export const someActionLogin = () => {
    return {
        type: LOGIN_ACTIONS.SOME_ACTION
    } as const
}
import {SIGN_UP_ACTIONS} from "./types";

export type SomeSignUpActionType = ReturnType<typeof someActionSignUp>
export const someActionSignUp = () => {
    return {
        type: SIGN_UP_ACTIONS.SOME_ACTION
    } as const
}
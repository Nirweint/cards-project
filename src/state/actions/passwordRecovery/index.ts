import {PASSWORD_RECOVERY_ACTIONS} from "./types";

export type SomePasswordRecoveryActionType = ReturnType<typeof someActionPasswordRecovery>
export const someActionPasswordRecovery = () => {
    return {
        type: PASSWORD_RECOVERY_ACTIONS.SOME_ACTION
    } as const
}
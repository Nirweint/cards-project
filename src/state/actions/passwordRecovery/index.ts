import {PASSWORD_RECOVERY_ACTIONS} from "./types";

export type SomePasswordRecoveryActionType = ReturnType<typeof actionPasswordRecovery>
export const actionPasswordRecovery = () => {
    return {
        type: PASSWORD_RECOVERY_ACTIONS.SEND_EMAIL,
    } as const
}
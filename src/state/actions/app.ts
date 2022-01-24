import {AppAction} from "../types/app";

export type SomeActionAppType = ReturnType<typeof someActionApp>
export const someActionApp = () => {
    return {
        type: AppAction.SOME_ACTION
    } as const
}
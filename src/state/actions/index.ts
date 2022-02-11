import {ProfileActionsType} from "./profile/types";
import {PasswordRecoveryActionsType} from "./passwordRecovery/types";
import {SignUpActionsType} from "./signUp/types";
import {AppActionsType} from "./app/types";
import {AuthActionsType} from "./auth/types";

export type RootActionsType =
    ProfileActionsType
    | SignUpActionsType
    | PasswordRecoveryActionsType
    | AppActionsType
    | AuthActionsType
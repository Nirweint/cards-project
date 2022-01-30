import {LoginActionsType} from "./login/types";
import {NewPasswordEnterActionsType} from "./newPasswordEnter/types";
import {ProfileActionsType} from "./profile/types";
import {PasswordRecoveryActionsType} from "./passwordRecovery/types";
import {SignUpActionsType} from "./signUp/types";

export type RootActionsType =
    ProfileActionsType
    | LoginActionsType
    | SignUpActionsType
    | NewPasswordEnterActionsType
    | PasswordRecoveryActionsType
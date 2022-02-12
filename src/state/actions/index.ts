import {ProfileActionsType} from "./profile/types";
import {PasswordRecoveryActionsType} from "./passwordRecovery/types";
import {AppActionsType} from "./app/types";
import {AuthActionsType} from "./auth/types";
import {PacksActionsType} from "./packs/types";
import {CardsActionsType} from "./cards/types";

export type RootActionsType =
    ProfileActionsType
    | PasswordRecoveryActionsType
    | AppActionsType
    | AuthActionsType
    | PacksActionsType
    | CardsActionsType
import { AppActionsType } from './app/types';
import { AuthActionsType } from './auth/types';
import { CardsActionsType } from './cards/types';
import { PacksActionsType } from './packs/types';
import { PasswordRecoveryActionsType } from './passwordRecovery/types';
import { ProfileActionsType } from './profile/types';

export type RootActionsType =
  | ProfileActionsType
  | PasswordRecoveryActionsType
  | AppActionsType
  | AuthActionsType
  | PacksActionsType
  | CardsActionsType;

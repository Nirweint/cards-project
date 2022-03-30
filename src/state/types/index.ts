import { ThunkAction } from 'redux-thunk';

import { RootActionsType } from '../actions';
import { RootStateType } from '../store';

export type ThunkType = ThunkAction<void, RootStateType, unknown, RootActionsType>;

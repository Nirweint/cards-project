import { PROFILE_ACTIONS, ProfileActionsType } from '../actions/profile/types';

import { LoginResponseType } from 'api/authAPI';

export type ProfileStateType = {
  profileData: LoginResponseType;
};

const initState: ProfileStateType = {
  profileData: {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0, // количество колод

    created: new Date(),
    updated: new Date(),
    isAdmin: false,
    verified: false, // подтвердил ли почту
    rememberMe: false,

    error: '',
  },
};

export const profileReducer = (
  state = initState,
  action: ProfileActionsType,
): ProfileStateType => {
  switch (action.type) {
    case PROFILE_ACTIONS.SET_PROFILE:
      return { ...state, profileData: action.payload };

    default:
      return state;
  }
};

import {PROFILE_ACTIONS, ProfileActionsType} from "../actions/profile/types";
import {LoginResponseType} from "../../api/authAPI";

export type ProfileStateType = {
    profileData: LoginResponseType | null
}

const initState: ProfileStateType = {
    profileData: null
}

export const profileReducer = (state = initState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case PROFILE_ACTIONS.SET_PROFILE:
            return {...state, profileData: {...action.payload}}

        default:
            return state;
    }
}
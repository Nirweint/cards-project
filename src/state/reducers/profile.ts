import {PROFILE_ACTIONS, ProfileActionsType} from "../actions/profile/types";

export type ProfileStateType = {}

const initState: ProfileStateType = {}

export const profileReducer = (state = initState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case PROFILE_ACTIONS.SOME_ACTION:
            return {...state}

        default:
            return state;
    }
}
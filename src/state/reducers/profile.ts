import {ProfileAction, ProfileActionsType, ProfileStateType} from "../types/profile";

const initState: ProfileStateType = {}

export const profileReducer = (state = initState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case ProfileAction.SOME_ACTION:
            return {...state}

        default:
            return state;
    }
}
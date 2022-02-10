import {ThunkType} from "../types";
import {RootStateType} from "../store";
import {setAppStatus} from "../actions/app";
import {authAPI, SetNameAvaResponseType, SetNameAvaType} from "../../api/authAPI";
import {AxiosResponse} from "axios";
import {setProfile} from "../actions/profile";

export const changeProfileName = (newTitle: string): ThunkType =>
    (dispatch, getState: () => RootStateType) => {
        dispatch(setAppStatus('loading'))
        const profile = getState().profile.profileData
        if (!profile) {
            console.warn('profile not found in the state')
            return
        }
        const updatedUser: SetNameAvaType = {
            name: newTitle,
            avatar: profile.avatar,
        }
        authAPI.setProfileName(updatedUser)
            .then((res: AxiosResponse<SetNameAvaResponseType>) => {
                dispatch(setProfile(res.data.updatedUser))
                dispatch(setAppStatus('succeeded'))
            })
    }


export const changeProfileAvatar = (newTitle: string): ThunkType =>
    (dispatch, getState: () => RootStateType) => {
        dispatch(setAppStatus('loading'))
        const profile = getState().profile.profileData
        if (!profile) {
            console.warn('profile not found in the state')
            return
        }
        const updatedUser: SetNameAvaType = {
            name: profile.name,
            avatar: newTitle,
        }
        authAPI.setProfileName(updatedUser)
            .then((res: AxiosResponse<SetNameAvaResponseType>) => {
                dispatch(setProfile(res.data.updatedUser))
                dispatch(setAppStatus('succeeded'))
            })
    }
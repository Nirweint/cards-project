import {ThunkType} from "../types";
import {authAPI} from "../../api";
import {AxiosResponse} from "axios";
import {LoginResponseType, SetNameAvaResponseType} from "../../api/authAPI";
import {authMeAction, setProfileAvatarAction, setProfileNameAction} from "../actions/auth";
import {setProfile} from "../actions/profile";
import {setAppError, setAppStatus} from "../actions/app";
import {RootStateType} from "../store";


export const fetchAuthMe = (): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.me()
        .then((res: AxiosResponse<LoginResponseType>) => {
            dispatch(authMeAction(true))
            dispatch(setProfile(res.data))
            dispatch(setProfileNameAction(res.data.name))
            dispatch(setProfileAvatarAction(res.data.avatar))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            dispatch(setAppError(error))
            console.log('Error', {...e})
        })
}

export const setProfileName = (name: string): ThunkType =>
    (dispatch, getState: () => RootStateType) => {
        dispatch(setAppStatus('loading'))
        const avatar = getState().auth.profileAvatar
        authAPI.setProfileName({name, avatar})
            .then((res: AxiosResponse<SetNameAvaResponseType>) => {
                dispatch(setProfileNameAction(res.data.updatedUser.name))
                dispatch(setAppStatus('succeeded'))
            })
    }

export const setProfileAva = (avatar: string): ThunkType =>
    (dispatch, getState: () => RootStateType) => {
        dispatch(setAppStatus('loading'))
        const name = getState().auth.profileName
        authAPI.setProfileName({name, avatar})
            .then((res: AxiosResponse<SetNameAvaResponseType>) => {
                dispatch(setProfileAvatarAction(res.data.updatedUser.avatar))
                dispatch(setAppStatus('succeeded'))
            })
    }
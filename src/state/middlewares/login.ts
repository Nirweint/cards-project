import {ThunkType} from "../types";
import {authAPI} from "../../api";
import {setProfile} from "../actions/profile";
import {AxiosResponse} from "axios";
import {LoginResponseType} from "../../api/authAPI";
import {authMeAction} from "../actions/auth";
import {setAppStatus} from "../actions/app";


export const setLogin = (email: string, password: string, rememberMe: boolean): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.login({email, password, rememberMe})
        .then((res: AxiosResponse<LoginResponseType>) => {
            dispatch(setProfile(res.data))
            dispatch(authMeAction(true))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            console.log('Error', {...e})
        })
}

export const LogOutTC = (): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.logout()
        .then((res) => {
            // dispatch(setProfile(res))
            dispatch(authMeAction(false))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            console.log('Error', {...e})
        })
}
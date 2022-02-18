import {ThunkType} from "../types";
import {authAPI} from "../../api";
import {setProfile} from "../actions/profile";
import {AxiosResponse} from "axios";
import {LoginResponseType} from "../../api/authAPI";
import {authMeAction} from "../actions/auth";
import {setAppError, setAppStatus} from "../actions/app";


export const setLogin = (email: string, password: string, rememberMe: boolean): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.login({email, password, rememberMe})
        .then((res: AxiosResponse<LoginResponseType>) => {
            dispatch(setProfile(res.data))
            dispatch(authMeAction(true))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            if (error === "not correct password /ᐠ-ꞈ-ᐟ\\" || error === "user not found /ᐠ-ꞈ-ᐟ\\") {
                dispatch(setAppError('Please enter valid email or password'))
                dispatch(authMeAction(false))
            }
        })
}

export const LogOutTC = (): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.logout()
        .then((res) => {
            dispatch(authMeAction(false))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}
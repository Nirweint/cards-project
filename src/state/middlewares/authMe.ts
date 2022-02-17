import {ThunkType} from "../types";
import {authAPI} from "../../api";
import {AxiosResponse} from "axios";
import {LoginResponseType} from "../../api/authAPI";
import {authMeAction} from "../actions/auth";
import {setProfile} from "../actions/profile";
import {setAppStatus} from "../actions/app";


export const fetchAuthMe = (): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.me()
        .then((res: AxiosResponse<LoginResponseType>) => {
            dispatch(authMeAction(true))
            dispatch(setProfile(res.data))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            console.log('Error', {...e})
        })
}


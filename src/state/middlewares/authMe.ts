import {ThunkType} from "../types";
import {api} from "../../api";
import {AxiosResponse} from "axios";
import {LoginResponseType} from "../../api/api";
import {authMeAction} from "../actions/auth";
import {setProfile} from "../actions/profile";


export const fetchAuthMe = (): ThunkType => dispatch => {
    debugger
    api.authMe()
        .then((res: AxiosResponse<LoginResponseType>) => {
            dispatch(authMeAction(true))
            dispatch(setProfile(res.data))
        })
        .catch((e: any) => {
            dispatch(authMeAction(false))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            console.log('Error', {...e})
        })
}
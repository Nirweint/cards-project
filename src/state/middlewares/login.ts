import {ThunkType} from "../types";
import {api} from "../../api";
import {setProfile} from "../actions/profile";
import {AxiosResponse} from "axios";
import {LoginResponseType} from "../../api/api";


export const fetchLogin = (email: string, password: string): ThunkType => (dispatch) => {
    api.login({email, password})
        .then((res: AxiosResponse<LoginResponseType>) => {
            dispatch(setProfile(res.data))
        })
        .catch((e: any) => {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
            console.log('Error', {...e})
    })
}
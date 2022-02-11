import {ThunkType} from "../types";
import {authAPI} from "../../api";
import {setAppError, setAppStatus} from "../actions/app";
import {setSignUpSuccess} from "../actions/auth";

export const signUpThunk = (email: string, password: string): ThunkType => (dispatch) => {
    dispatch(setAppStatus('loading'))
    authAPI.signUp(email, password)
        .then(res => {
            dispatch(setAppStatus('succeeded'))
            dispatch(setSignUpSuccess(true))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(e.response.data.error))
        })
}
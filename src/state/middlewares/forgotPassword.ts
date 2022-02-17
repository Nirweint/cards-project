import {ThunkType} from "../types";
import {authAPI} from "../../api";
import {ForgotPasswordDataRequestType} from "../../api/authAPI";
import {setNewPasswordSuccess} from "../actions/passwordRecovery";
import {setAppError, setAppStatus} from "../actions/app";

export const sendEmailThunk = (dataRequest: ForgotPasswordDataRequestType): ThunkType => dispatch => {
    authAPI.forgotPassword(dataRequest)
        .then(res => {
            console.log(res.data)
        })
}

export const setNewPasswordTC = (newPassword: string, token: string | undefined): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.setNewPassword(newPassword, token)
        .then(res => {
            if (res.data.info === 'setNewPassword success —ฅ/ᐠ.̫ .ᐟฅ—') {
                dispatch(setNewPasswordSuccess(true))
                dispatch(setAppStatus('succeeded'))
            }
        })
        .catch(e => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};
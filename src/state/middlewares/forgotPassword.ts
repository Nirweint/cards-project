import {ThunkType} from "../types";
import {authAPI} from "../../api";
import {ForgotPasswordDataRequestType} from "../../api/authAPI";
import {Dispatch} from "redux";

export const sendEmailThunk = (dataRequest: ForgotPasswordDataRequestType): ThunkType => (dispatch: Dispatch) => {
    authAPI.forgotPassword(dataRequest)
        .then(res => {
            console.log(res.data)
        })
}


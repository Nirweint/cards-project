import {ThunkType} from "../types";
import {api} from "../../api";
import { ForgotPasswordDataRequestType } from "../../api/api";
import {Dispatch} from "redux";


export const sendEmailThunk = (dataRequest: ForgotPasswordDataRequestType): ThunkType => (dispatch: Dispatch) => {
    api.forgotPassword(dataRequest)
        .then(res => {
            console.log(res.data)
        })
}


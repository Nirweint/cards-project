import {ThunkType} from "../types";
import {authAPI} from "../../api";

export const signUpThunk = (email:string,password:string): ThunkType => (dispatch) => {
    authAPI.signUp(email,password)
        .then(res => console.log(res.data))
}
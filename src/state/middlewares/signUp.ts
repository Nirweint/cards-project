import {ThunkType} from "../types";
import {api} from "../../api";

export const signUpThunk = (email:string,password:string): ThunkType => (dispatch) => {
    api.signUp(email,password)
        .then(res => console.log(res.data))
}
import {ThunkType} from "../types";
import {someActionProfile} from "../actions/profile";
import {api} from "../../api";
import {LoginResponseType} from "../../api/api";


export const fetchLogin = (email: string, password: string): ThunkType => (dispatch) => {
    api.login({email, password})
        .then((res: LoginResponseType) => {
            // dispatch(setProfile(res.data))
        })
    //     .catch(error: any) {
    //     const error = error.response
    //         ? error.response.data.error
    //         : (error.message + ', more details in the console');
    // }
    // dispatch(someActionProfile())
}
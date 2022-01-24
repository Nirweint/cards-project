import {ThunkType} from "../types";
import {someActionProfile} from "../actions/profile";

export const profileThunk = (): ThunkType => (dispatch) => {
    dispatch(someActionProfile())
}
import {ThunkType} from "../types";
import {someActionApp} from "../actions/app";


export const appThunk = (): ThunkType => (dispatch) => {
    dispatch(someActionApp())
}
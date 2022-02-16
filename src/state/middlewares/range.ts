import {ThunkType} from "../types";
import {packsAPI} from "../../api";
import {setAppError, setAppStatus} from "../actions/app";
import { setCurrentPack } from "../actions/packs";


export const changePackRangeThunk = (min: number, max: number): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    packsAPI.getPacks({min, max})
        .then(res => {
            dispatch(setCurrentPack(res.data))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(e.response.data.error))
        })
}


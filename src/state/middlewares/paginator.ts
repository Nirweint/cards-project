import {ThunkType} from "../types";
import {packsAPI} from "../../api";
import {setAppError, setAppStatus} from "../actions/app";
import {setCurrentPage, setPageCount, setTotalCountPacks} from "../actions/packs";


export const paginatorThunk = (page: number): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    packsAPI.getPacks({page})
        .then(res => {
            dispatch(setTotalCountPacks(res.data.cardPacksTotalCount))
            dispatch(setCurrentPage(res.data.page))
            // dispatch(setPageCount(res.data.pageCount))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(e.response.data.error))
        })
}


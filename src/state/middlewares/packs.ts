import {ThunkType} from "../types";
import {RootStateType} from "../store";
import {packsAPI} from "../../api";
import {setAppError, setAppStatus} from "../actions/app";
import {setCurrentPack} from "../actions/packs";
import {CardPacksParamsType} from "../../api/packsAPI";


export const getPacksOfCards = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    const userId = getState().profile.profileData._id
    const page = getState().packs.params.page
    const min = getState().packs.params.min
    const max = getState().packs.params.max
    const pageCount = getState().packs.params.pageCount
    const showAllPacks = getState().packs.showAllPacks

    dispatch(setAppStatus('loading'))
    let params: CardPacksParamsType = {
        page, pageCount,
        min, max
    }
    if (!showAllPacks) {
        params = {...params, user_id: userId}
    }

    packsAPI.getPacks(params)
        .then((res) => {
            dispatch(setAppStatus('succeeded'))
            dispatch(setCurrentPack(res.data))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}

export const addPackTC = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'))
    packsAPI.postPack({name: 'new pack'})
        .then((res) => {
            dispatch(getPacksOfCards())
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};

export const deletePackTC = (_id: string): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'))
    packsAPI.deletePack(_id)
        .then((res) => {
            dispatch(getPacksOfCards())
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'));
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};

export const updatePackTC = (_id: string): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'))
    packsAPI.updatePack({_id, name: 'updated'})
        .then((res) => {
            dispatch(getPacksOfCards())
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'));
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};
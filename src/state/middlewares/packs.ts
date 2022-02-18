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
    const showAllPacks = getState().packs.showAllPacks

    dispatch(setAppStatus('loading'))
    let params: CardPacksParamsType = {
        page, pageCount: 10,
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
    packsAPI.postPack({})
        .then((res) => {
            dispatch(setCurrentPack(res.data))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};

export const deletePackTC = (_id: string): ThunkType => (dispatch, getState: () => RootStateType) => {
    const currentPack = getState().packs.pack.cardPacks.find(p => p._id === _id);

    packsAPI.deletePack(currentPack._id)
        .then((res) => {
            dispatch(setCurrentPack(res.data))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'));
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};

export const updatePackTC = (_id: string): ThunkType => (dispatch, getState: () => RootStateType) => {
    const currentPack = getState().packs.pack.cardPacks.find(p => p._id === _id)

    packsAPI.updatePack(currentPack._id)
        .then((res) => {
            dispatch(setCurrentPack(res.data))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'));
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};
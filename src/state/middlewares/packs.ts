import {ThunkType} from "../types";
import {RootStateType} from "../store";
import {packsAPI} from "../../api";
import {setAppError, setAppStatus} from "../actions/app";
import {setCurrentPack} from "../actions/packs";
import {CardPacksParamsType} from "../../api/packsAPI";


export const getPacksOfCards = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'))

    const userId = getState().profile.profileData._id
    const showAllPacks = getState().packs.showAllPacks
    let params: CardPacksParamsType = getState().packs.params

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

export const addPackTC = (name: string): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    packsAPI.postPack({name})
        .then((res) => {
            dispatch(getPacksOfCards())
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};

export const deletePackTC = (_id: string): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    packsAPI.deletePack(_id)
        .then((res) => {
            dispatch(getPacksOfCards())
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'));
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};

export const updatePackTC = (_id: string, name: string): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    packsAPI.updatePack({_id, name})
        .then((res) => {
            dispatch(getPacksOfCards())
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'));
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
};
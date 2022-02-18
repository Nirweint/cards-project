import {ThunkType} from "../types";
import {setAppError, setAppStatus} from "../actions/app";
import {cardsAPI} from "../../api";

import {RootStateType} from "../store";
import {PostCardDataType, updateCardType} from "../../api/cardsAPI";
import {setCardsPack} from "../actions/cards";

export const getCards = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'))
    const cardsPack_id  = getState().cards.currentCardsPack_id;
    const profile_id = getState().profile.profileData._id
    cardsAPI.getCards({cardsPack_id, pageCount: 10})
        .then((res) => {
            dispatch(setCardsPack(res.data))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}

export const setNewCard = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'))
    const cardsPack_id  = getState().cards.currentCardsPack_id;
    const profile_id  = getState().profile.profileData._id;
    if (cardsPack_id === profile_id) {
        const data: PostCardDataType = {
            cardsPack_id,
            question: 'new question',
            answer: 'new answer',
        }
        cardsAPI.postCard(data)
            .then((res) => {
                dispatch(getCards())
                dispatch(setAppStatus('succeeded'))
            })
            .catch((e) => {
                dispatch(setAppStatus('failed'))
                const error = e.response ? e.response.data.error : e.message;
                dispatch(setAppError(error))
            })
    }
}

export const deleteCard = (cardId: string): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    cardsAPI.deleteCard(cardId)
        .then((res) => {
            dispatch(getCards())
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}

export const updateCard = (data: updateCardType): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'))
    cardsAPI.updateCard(data)
        .then((res) => {
            dispatch(getCards())
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}
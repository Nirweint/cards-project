import {ThunkType} from "../types";
import {setAppError, setAppStatus} from "../actions/app";
import {cardsAPI} from "../../api";

import {RootStateType} from "../store";
import {PostCardDataType, updateCardType} from "../../api/cardsAPI";
import {setCardsPack} from "../actions/cards";

export const getCards = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    // const _id = getState().packs
    cardsAPI.getCards({cardsPack_id: '620ca7f3e1222800041437a7', pageCount: 10})
        .then((res) => {
            dispatch(setCardsPack(res.data))
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}

export const setNewCard = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    // const _id = getState().packs
    const data: PostCardDataType = {
        cardsPack_id: '620ca7f3e1222800041437a7',
        question: 'new question',
        answer: 'new answer',
    }
    cardsAPI.postCard(data)
        .then((res) => {
            dispatch(getCards())
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}

export const deleteCard = (cardId: string): ThunkType => dispatch => {
    cardsAPI.deleteCard(cardId)
        .then((res) => {
            dispatch(getCards())
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}

export const updateCard = (data: updateCardType): ThunkType => (dispatch, getState: () => RootStateType) => {

    cardsAPI.updateCard(data)
        .then((res) => {
            dispatch(getCards())
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}
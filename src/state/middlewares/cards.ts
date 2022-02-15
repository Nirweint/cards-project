import {ThunkType} from "../types";
import {setAppError, setAppStatus} from "../actions/app";
import {cardsAPI} from "../../api";

import {RootStateType} from "../store";
import {PostCardDataType, updateCardType} from "../../api/cardsAPI";
import {setCardsPack} from "../actions/cards";

export const getCards = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    // const _id = getState().packs
    cardsAPI.getCards({cardsPack_id: '60141e54f8f3eb00042c7c44'})
        .then((res) => {
            dispatch(setCardsPack(res.data))
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            console.log('Error', {...e})
        })
}

export const setNewCard = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    // const _id = getState().packs
    const data: PostCardDataType = {
        cardsPack_id: '60141e54f8f3eb00042c7c44',
        question: 'new question',
        answer: 'new answer',
    }
    cardsAPI.postCard(data)
        .then((res) => {
            //
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
            //
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
            //
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}
import {ThunkType} from "../types";
import {setAppError, setAppStatus} from "../actions/app";
import {cardsAPI} from "../../api";
import {RootStateType} from "../store";
import {PostCardDataType, updateCardType} from "../../api/cardsAPI";
import {setCardsPack} from "../actions/cards";
import {fetchAuthMe} from "./authMe";

export const getCards = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'))
    const {pageCount, page, cardQuestion} = getState().cards.params
    const cardsPack_id = getState().cards.currentCardsPack_id;
    cardsAPI.getCards({cardsPack_id, pageCount, page, cardQuestion })
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

export const setNewCard = (question: string, answer: string): ThunkType => (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'))

    const cardsPack_id = getState().cards.currentCardsPack_id;
    const data: PostCardDataType = {
        cardsPack_id,
        question,
        answer,
    }
    cardsAPI.postCard(data)
        .then((res) => {
            dispatch(getCards())
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            if (error === 'you are not authorized /ᐠ-ꞈ-ᐟ\\') {
                dispatch(fetchAuthMe())
            }
            dispatch(setAppError(error))
        })
}

export const deleteCard = (cardId: string): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))

    cardsAPI.deleteCard(cardId)
        .then((res) => {
            dispatch(getCards())
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}

export const updateCard = (data: updateCardType): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))

    cardsAPI.updateCard(data)
        .then((res) => {
            dispatch(getCards())
        })
        .catch((e) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : e.message;
            dispatch(setAppError(error))
        })
}
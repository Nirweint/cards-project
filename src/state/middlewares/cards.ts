import { setAppError, setAppStatus } from '../actions/app';
import { setCardsPack } from '../actions/cards';
import { RootStateType } from '../store';
import { ThunkType } from '../types';

import { fetchAuthMe } from './authMe';

import { cardsAPI } from 'api';
import {
  PostCardDataType,
  UpdateCardType,
  UpgradeCardGradePayloadType,
} from 'api/cardsAPI';

export const getCards = (): ThunkType => (dispatch, getState: () => RootStateType) => {
  dispatch(setAppStatus('loading'));
  const { pageCount, page, cardQuestion } = getState().cards.params;
  const cardsPackId = getState().cards.currentCardsPack_id;
  cardsAPI
    .getCards({ cardsPack_id: cardsPackId, pageCount, page, cardQuestion })
    .then(res => {
      dispatch(setCardsPack(res.data));
      dispatch(setAppStatus('succeeded'));
    })
    .catch(e => {
      dispatch(setAppStatus('failed'));
      const error = e.response ? e.response.data.error : e.message;
      dispatch(setAppError(error));
    });
};

export const setNewCard =
  (question: string, answer: string): ThunkType =>
  (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatus('loading'));

    const cardsPackId = getState().cards.currentCardsPack_id;
    const data: PostCardDataType = {
      cardsPack_id: cardsPackId,
      question,
      answer,
    };
    cardsAPI
      .postCard(data)
      .then(() => {
        dispatch(getCards());
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        const error = e.response ? e.response.data.error : e.message;
        if (error === 'you are not authorized /ᐠ-ꞈ-ᐟ\\') {
          dispatch(fetchAuthMe());
        }
        dispatch(setAppError(error));
      });
  };

export const deleteCard =
  (cardId: string): ThunkType =>
  dispatch => {
    dispatch(setAppStatus('loading'));

    cardsAPI
      .deleteCard(cardId)
      .then(() => {
        dispatch(getCards());
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        const error = e.response ? e.response.data.error : e.message;
        dispatch(setAppError(error));
      });
  };

export const updateCard =
  (data: UpdateCardType): ThunkType =>
  dispatch => {
    dispatch(setAppStatus('loading'));

    cardsAPI
      .updateCard(data)
      .then(() => {
        dispatch(getCards());
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        const error = e.response ? e.response.data.error : e.message;
        dispatch(setAppError(error));
      });
  };

export const updateCardGrade =
  (payload: UpgradeCardGradePayloadType): ThunkType =>
  dispatch => {
    dispatch(setAppStatus('loading'));

    cardsAPI
      .updateCardGrade(payload)
      .then(() => {
        dispatch(getCards());
      })
      .catch(e => {
        dispatch(setAppStatus('failed'));
        const error = e.response ? e.response.data.error : e.message;
        dispatch(setAppError(error));
      });
  };

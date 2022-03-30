import React, { FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { UpdateCard } from '../updateCard/UpdateCard';

import s from './CardItem.module.css';

import { Button, Modal } from 'components';
import { Rating } from 'components/rating';
import { deleteCard, updateCard } from 'state/middlewares/cards';
import { selectAppStatus } from 'state/selectors/app';
import { selectCurrentCardsPacksId } from 'state/selectors/cards';
import { selectProfileId } from 'state/selectors/profile';
import { ReturnComponentType } from 'types';

const MAX_RATING = 5;
const CONVERSION_TO_GRADE = 10;

type CardItemType = {
  question: string;
  answer: string;
  updated: string;
  cardId: string;
  grade: number;
};

export const CardItem: FC<CardItemType> = ({
  question,
  updated,
  answer,
  cardId,
  grade,
}): ReturnComponentType => {
  const dispatch = useDispatch();

  const cardsPackId = useSelector(selectCurrentCardsPacksId);
  const profileId = useSelector(selectProfileId);
  const appStatus = useSelector(selectAppStatus);

  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

  const updatedDate = new Date(updated).toLocaleDateString();

  const isUserCardsPack = cardsPackId === profileId;

  const onDeleteCardClick = (): void => {
    dispatch(deleteCard(cardId));
  };

  const onShowModalForUpdateClick = (): void => {
    setShowUpdateModal(true);
  };

  const handleUpdateModalClick = (questionValue: string, answerValue: string): void => {
    setShowUpdateModal(false);
    dispatch(updateCard({ _id: cardId, question: questionValue, answer: answerValue }));
  };

  const handleCancelUpdateClick = (): void => {
    setShowUpdateModal(false);
  };

  return (
    <tr>
      <td>{question}</td>
      <td>{answer}</td>
      <td>{updatedDate}</td>
      <td>
        <Rating
          value={Math.round(grade * CONVERSION_TO_GRADE) / CONVERSION_TO_GRADE}
          max={MAX_RATING}
        />
      </td>
      {isUserCardsPack && (
        <td>
          <Button
            disabled={appStatus === 'loading'}
            className={s.btn}
            red
            onClick={onDeleteCardClick}
          >
            delete
          </Button>
          <Button
            disabled={appStatus === 'loading'}
            className={s.btn}
            onClick={onShowModalForUpdateClick}
          >
            update
          </Button>
        </td>
      )}
      {showUpdateModal && (
        <Modal setShow={setShowUpdateModal}>
          <UpdateCard
            cancelHandler={handleCancelUpdateClick}
            submitHandler={handleUpdateModalClick}
            question={question}
            answer={answer}
          />
        </Modal>
      )}
    </tr>
  );
};

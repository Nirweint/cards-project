import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, useParams } from 'react-router-dom';

import { CardItem } from './cardItem';
import s from './CardsList.module.css';
import { UpdateCard } from './updateCard/UpdateCard';

import { PATH } from 'app/routes/RoutesComponent';
import { Button, Modal, Paginator, Search } from 'components';
import { EMPTY_STRING, PORTION_SIZE } from 'constants/index';
import {
  setCardsCurrentId,
  setCurrentCardsPage,
  setSearchCard,
} from 'state/actions/cards';
import { getCards, setNewCard } from 'state/middlewares/cards';
import { selectAppStatus } from 'state/selectors/app';
import { selectIsAuth } from 'state/selectors/auth';
import {
  selectCardsPackParams,
  selectCardsTotalCount,
  selectCurrentCardsPacksId,
  selectListOfCards,
} from 'state/selectors/cards';
import { selectCardPacks } from 'state/selectors/packs';
import { selectProfileId } from 'state/selectors/profile';
import { ReturnComponentType } from 'types';

export const CardsList = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const { id } = useParams<'id'>();

  const isAuth = useSelector(selectIsAuth);
  const cards = useSelector(selectListOfCards);
  const cardsPacksUserId = useSelector(selectCurrentCardsPacksId);
  const profileId = useSelector(selectProfileId);
  const appStatus = useSelector(selectAppStatus);
  const packs = useSelector(selectCardPacks);
  const cardsTotalCount = useSelector(selectCardsTotalCount);
  const { page, pageCount, cardQuestion } = useSelector(selectCardsPackParams);

  const [portionNumber, setPortionNumber] = useState(1);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

  // eslint-disable-next-line no-underscore-dangle
  const currentPack = packs.find(pack => pack._id === id);
  const isUserCardsPack = cardsPacksUserId === profileId;

  useEffect(() => {
    if (id) {
      dispatch(setCardsCurrentId(id));
    }
    dispatch(getCards());
  }, [dispatch, page, cardsTotalCount, cardQuestion]);

  const handleSetCurrentPage = (currentPage: number): void => {
    dispatch(setCurrentCardsPage(currentPage));
  };

  const onShowModalForAddNewCardClick = (): void => {
    setShowUpdateModal(true);
  };

  const handleAddNewCardClick = (questionValue: string, answerValue: string): void => {
    setShowUpdateModal(false);
    dispatch(setNewCard(questionValue, answerValue));
  };

  const handleCancelAddNewCardClick = (): void => {
    setShowUpdateModal(false);
  };

  const handleSetSearchValue = (value: string): void => {
    dispatch(setSearchCard(value));
  };

  if (!isAuth) {
    return <Navigate replace to={PATH.LOGIN} />;
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.header}>
          <NavLink to={PATH.PACKS_LIST} className={s.link}>
            ← {currentPack && currentPack.name}
          </NavLink>
          <Search setSearchValue={handleSetSearchValue} className={s.search} />
        </div>

        {cards.length === 0 && isUserCardsPack && cardQuestion === EMPTY_STRING && (
          <Button
            disabled={appStatus === 'loading'}
            onClick={onShowModalForAddNewCardClick}
          >
            Add new card
          </Button>
        )}

        {cards.length > 0 ? (
          <div className={s.tableWrapper}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Last Updated</th>
                  <th>Grade</th>
                  {isUserCardsPack && (
                    <th>
                      <Button
                        disabled={appStatus === 'loading'}
                        onClick={onShowModalForAddNewCardClick}
                      >
                        Add new card
                      </Button>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {cards.map(({ answer, question, updated, _id, grade }) => (
                  <CardItem
                    key={_id}
                    answer={answer}
                    question={question}
                    updated={updated}
                    cardId={_id}
                    grade={grade}
                  />
                ))}
              </tbody>
            </table>
            <div className={s.paginator}>
              <Paginator
                totalCountItems={cardsTotalCount}
                itemsPerPage={pageCount}
                currentPage={page || 1}
                portionSize={PORTION_SIZE}
                portionNumber={portionNumber}
                setPortionNumber={setPortionNumber}
                setCurrentPage={handleSetCurrentPage}
              />
            </div>
          </div>
        ) : (
          <div className={s.emptyPackWrapper}>
            {cardQuestion !== EMPTY_STRING ? (
              <p>{`This pack of cards don't have ${cardQuestion}`}</p>
            ) : (
              <p>
                {isUserCardsPack
                  ? 'This pack is empty. Click add new card to fill this pack'
                  : 'This pack is empty.'}
              </p>
            )}
          </div>
        )}
      </div>
      {showUpdateModal && (
        <Modal setShow={setShowUpdateModal}>
          <UpdateCard
            cancelHandler={handleCancelAddNewCardClick}
            submitHandler={handleAddNewCardClick}
          />
        </Modal>
      )}
    </>
  );
};

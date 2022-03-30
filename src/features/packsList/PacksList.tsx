import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import PackItem from './packItem/PackItem';
import s from './PacksList.module.css';
import SideBar from './sideBar/SideBar';
import { UpdatePackTitle } from './updatePackTitle/UpdatePackTitle';

import { PATH } from 'app/routes/RoutesComponent';
import { Modal, Button, Paginator, PriceRange, Search, Select, Sort } from 'components';
import { PORTION_SIZE } from 'constants/index';
import { setCurrentPage, setSearchPack } from 'state/actions/packs';
import { addPackTC, getPacksOfCards } from 'state/middlewares/packs';
import { selectIsAuth } from 'state/selectors/auth';
import {
  selectCardPacks,
  selectCurrentPage,
  selectMaxCardCount,
  selectMaxCardCountFromState,
  selectMinCardCount,
  selectMinCardCountFromState,
  selectPacksTotalCount,
  selectPageCount,
  selectPageSize,
  selectSearchPack,
  selectSelectQuantityItems,
  selectShowAllPacks,
  selectSortPacks,
} from 'state/selectors/packs';
import { ReturnComponentType } from 'types';

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const LIST_OF_PORTION = [5, 10, 20];

const PacksList = (): ReturnComponentType => {
  const cardPacks = useSelector(selectCardPacks);
  const isAuth = useSelector(selectIsAuth);
  const totalCountPacks = useSelector(selectPacksTotalCount); // всего эл-тов
  const packsPerPage = useSelector(selectPageCount); // кол-во элементов на стр
  const currentPage = useSelector(selectCurrentPage); // текущая стр
  const isShowAllPacks = useSelector(selectShowAllPacks);
  const minCardCount = useSelector(selectMinCardCount);
  const maxCardCount = useSelector(selectMaxCardCount);
  const pageSize = useSelector(selectPageSize);
  const minCardCountFromState = useSelector(selectMinCardCountFromState);
  const maxCardCountFromState = useSelector(selectMaxCardCountFromState);
  const selectItem = useSelector(selectSelectQuantityItems);
  const searchPack = useSelector(selectSearchPack);
  const sortPacks = useSelector(selectSortPacks);

  const [portionNumber, setPortionNumber] = useState(1); // изменение текущей порции
  const [showAddNewPackModal, setShowAddNewPackModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  const onAddNewPackClick = (): void => {
    setShowAddNewPackModal(true);
  };
  const notAddNewPackHandler = (): void => {
    setShowAddNewPackModal(false);
  };
  const addNewPackHandler = (title: string): void => {
    setShowAddNewPackModal(false);
    dispatch(addPackTC(title));
  };

  const handleSetCurrentPage = (page: number): void => {
    dispatch(setCurrentPage(page));
  };

  const handleSetSearchValue = (value: string): void => {
    dispatch(setSearchPack(value));
  };

  useEffect(() => {
    dispatch(getPacksOfCards());
  }, [
    dispatch,
    currentPage,
    minCardCount,
    maxCardCount,
    isShowAllPacks,
    pageSize,
    searchPack,
    sortPacks,
  ]);

  if (!isAuth) {
    return <Navigate replace to={PATH.LOGIN} />;
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.row}>
          <div className={s.container}>
            <SideBar />
            <PriceRange
              min={minCardCountFromState || 0}
              max={maxCardCountFromState || 1}
            />
          </div>

          <div className={s.tableWrapper}>
            <Search setSearchValue={handleSetSearchValue} />
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Cards Count</th>
                  <th className={s.sortWrapper}>
                    Update
                    <div className={s.sort}>
                      <Sort setPortionNumber={setPortionNumber} />
                    </div>
                  </th>
                  <th className={s.actions}>
                    <Button onClick={onAddNewPackClick}>Add new pack</Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable-next-line camelcase */}
                {cardPacks.map(({ _id, cardsCount, updated, user_id, name }) => (
                  <PackItem
                    key={_id}
                    name={name}
                    cardsCount={cardsCount}
                    // eslint-disable-next-line camelcase
                    userId={user_id}
                    update={updated}
                    _id={_id}
                  />
                ))}
              </tbody>
            </table>
            <div className={s.paginator}>
              <Select selectItemsPerPage={selectItem} listValues={LIST_OF_PORTION} />
              <Paginator
                totalCountItems={totalCountPacks}
                itemsPerPage={packsPerPage}
                currentPage={currentPage || 1}
                portionSize={PORTION_SIZE}
                portionNumber={portionNumber}
                setPortionNumber={setPortionNumber}
                setCurrentPage={handleSetCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
      {showAddNewPackModal && (
        <Modal setShow={notAddNewPackHandler}>
          <UpdatePackTitle
            title="Create new pack"
            cancelHandler={notAddNewPackHandler}
            submitHandler={addNewPackHandler}
          />
        </Modal>
      )}
    </>
  );
};

export default PacksList;

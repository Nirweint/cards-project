import React, { KeyboardEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import imgSort from '../../assets/images/sort.svg';

import s from './Sort.module.css';

import { setCurrentPage, SortPacksName } from 'state/actions/packs';
import { ReturnComponentType } from 'types';

const SORT_LOW = '0updated';
const SORT_HIGH = '1updated';

type SortType = {
  setPortionNumber: (portionNumber: number) => void;
};

export const Sort = ({ setPortionNumber }: SortType): ReturnComponentType => {
  const [sort, setSort] = useState<'0updated' | '1updated'>(SORT_LOW);

  const dispatch = useDispatch();

  const sortLowHandler = (): void => {
    dispatch(SortPacksName(SORT_LOW));
    setSort(SORT_LOW);
    dispatch(setCurrentPage(1));
    setPortionNumber(1);
  };
  const sortLowEnterPressHandler = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      dispatch(SortPacksName(SORT_LOW));
      setSort(SORT_LOW);
      dispatch(setCurrentPage(1));
      setPortionNumber(1);
    }
  };
  const sortHighHandler = (): void => {
    dispatch(SortPacksName(SORT_HIGH));
    setSort(SORT_HIGH);
    dispatch(setCurrentPage(1));
    setPortionNumber(1);
  };
  const sortHighEnterPressHandler = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      dispatch(SortPacksName(SORT_HIGH));
      setSort(SORT_HIGH);
      dispatch(setCurrentPage(1));
      setPortionNumber(1);
    }
  };

  return (
    <>
      {sort === SORT_HIGH && (
        <div
          role="button"
          tabIndex={0}
          onClick={sortLowHandler}
          onKeyPress={sortLowEnterPressHandler}
          className={s.sort}
        >
          <img src={imgSort} alt="sorting" />
        </div>
      )}
      {sort === SORT_LOW && (
        <div
          role="button"
          tabIndex={0}
          onClick={sortHighHandler}
          onKeyPress={sortHighEnterPressHandler}
          className={s.sort}
        >
          <img src={imgSort} alt="sorting" />
        </div>
      )}
    </>
  );
};

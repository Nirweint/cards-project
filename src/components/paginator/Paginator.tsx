import React from 'react';

import { useSelector } from 'react-redux';

import { Button } from '../common';

import s from './Paginator.module.css';

import { selectAppStatus } from 'state/selectors/app';
import { ReturnComponentType } from 'types';

type PaginatorType = {
  totalCountItems: number;
  itemsPerPage: number;
  currentPage: number;
  portionSize: number;
  portionNumber: number;
  setPortionNumber: (portionNumber: number) => void;
  setCurrentPage: (page: number) => void;
};

export const Paginator = (props: PaginatorType): ReturnComponentType => {
  const {
    totalCountItems,
    itemsPerPage,
    currentPage,
    portionSize,
    portionNumber,
    setPortionNumber,
    setCurrentPage,
  } = props;

  const appStatus = useSelector(selectAppStatus);

  const pagesCount = Math.ceil(totalCountItems / itemsPerPage); // всего страниц

  const pagesCountArr = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pagesCountArr.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize); // кол-во порций страниц
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // стр начало порции
  const rightPortionPageNumber = portionNumber * portionSize; // стр конец порции

  const onClickPageChange = (page: number): void => {
    setCurrentPage(page);
  };
  const onClickPreviousPortion = (): void => {
    setPortionNumber(portionNumber - 1);
  };
  const onClickNextPortion = (): void => {
    setPortionNumber(portionNumber + 1);
  };

  return (
    <div>
      <Button disabled={portionNumber === 1} onClick={onClickPreviousPortion}>
        PREV
      </Button>

      {pagesCountArr
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => (
          <button
            type="button"
            disabled={appStatus === 'loading'}
            key={p}
            className={`${currentPage === p ? s.selectedPage : ''} ${s.pages}`}
            onClick={() => onClickPageChange(p)}
          >
            {p}
          </button>
        ))}

      {portionCount > portionNumber && <Button onClick={onClickNextPortion}>NEXT</Button>}
    </div>
  );
};

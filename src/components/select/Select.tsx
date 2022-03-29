import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import s from './Select.module.css';

import { setPageSize } from 'state/actions/packs';
import { ReturnComponentType } from 'types';

type SelectType = {
  selectItemsPerPage: number;
  listValues: number[];
};

export const Select = ({
  selectItemsPerPage,
  listValues,
}: SelectType): ReturnComponentType => {
  const dispatch = useDispatch();

  const [selects, setSelects] = useState(`${selectItemsPerPage}`);

  const changeSelectValue = (e: ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setPageSize(+e.currentTarget.value));
    setSelects(e.currentTarget.value);
  };

  return (
    <div className={s.select}>
      <select value={selects} onChange={changeSelectValue}>
        {listValues.map(it => (
          <option key={it} value={it}>
            {it}
          </option>
        ))}
      </select>
    </div>
  );
};

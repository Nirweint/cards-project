import React, { ChangeEvent, useState } from 'react';

import { useSelector } from 'react-redux';

import { Button, InputText } from '../common';

import s from './Search.module.css';

import { selectAppStatus } from 'state/selectors/app';
import { ReturnComponentType } from 'types';

type SearchType = {
  setSearchValue: (value: string) => void;
  className?: string;
};

export const Search = ({
  setSearchValue,
  className,
}: SearchType): ReturnComponentType => {
  const appStatus = useSelector(selectAppStatus);
  const [query, setQuery] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const finalStyle = `${s.search} ${className}`;

  const onChangeQueryHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value);
  };

  const searchQueryHandler = (): void => {
    setSearchValue(query);
    setQuery('');
    setValue(query);
  };
  const resetSearchHandler = (): void => {
    setSearchValue('');
    setValue('');
  };

  return (
    <div className={finalStyle}>
      <InputText
        style={{ marginRight: '5px' }}
        placeholder="🔍 Search..."
        name="Search"
        value={query}
        onChange={onChangeQueryHandler}
      />
      <Button
        className={s.btn}
        disabled={appStatus === 'loading'}
        onClick={searchQueryHandler}
      >
        {' '}
        Search!
      </Button>
      <Button
        className={s.btn}
        disabled={appStatus === 'loading'}
        onClick={resetSearchHandler}
      >
        {' '}
        Reset
      </Button>
      <div className={s.searchedValue}>{value}</div>
    </div>
  );
};

Search.defaultProps = {
  className: '',
};

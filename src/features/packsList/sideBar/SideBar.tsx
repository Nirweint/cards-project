import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import s from './SideBar.module.css';

import { Button } from 'components';
import { setShowAllPacks } from 'state/actions/packs';
import { selectAppStatus } from 'state/selectors/app';
import { selectShowAllPacks } from 'state/selectors/packs';
import { ReturnComponentType } from 'types';

const SideBar = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const isShowAllPacks = useSelector(selectShowAllPacks);
  const appStatus = useSelector(selectAppStatus);

  const isMyButtonActiveStyle = !isShowAllPacks ? s.active : '';
  const isAllButtonActiveStyle = isShowAllPacks ? s.active : '';

  const onAllButtonClick = (): void => {
    dispatch(setShowAllPacks(true));
  };

  const onMyButtonClick = (): void => {
    dispatch(setShowAllPacks(false));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Show packs cards</div>
      <Button
        className={isMyButtonActiveStyle}
        disabled={appStatus === 'loading'}
        onClick={onMyButtonClick}
      >
        My
      </Button>
      <Button
        className={isAllButtonActiveStyle}
        disabled={appStatus === 'loading'}
        onClick={onAllButtonClick}
      >
        All
      </Button>
      <div className={s.title}>Number of cards</div>
    </div>
  );
};

export default SideBar;

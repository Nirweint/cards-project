import React from 'react';

import s from './Modal.module.css';

import { ReturnComponentType } from 'types';

type ModalType = {
  setShow: (isShow: boolean) => void;
};

export const Modal: React.FC<ModalType> = ({
  setShow,
  children,
}): ReturnComponentType => (
  <div className={s.body}>
    <div
      role="presentation"
      onClick={() => {
        setShow(false);
      }}
      className={s.veil}
    >
      {' '}
    </div>
    <div className={s.modal}>{children}</div>
  </div>
);

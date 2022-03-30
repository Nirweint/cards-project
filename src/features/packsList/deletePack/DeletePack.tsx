import React from 'react';

import s from './DeletePack.module.css';

import { Button } from 'components';
import { ReturnComponentType } from 'types';

type DeletePackType = {
  deletedTitle: string;
  cancelHandler: () => void;
  submitHandler: () => void;
};

export const DeletePack = ({
  deletedTitle,
  cancelHandler,
  submitHandler,
}: DeletePackType): ReturnComponentType => (
  <>
    <h2>Delete Pack</h2>
    <p>
      Do you really remove <b>{deletedTitle}</b> pack?
    </p>
    <p>All cards will be excluded from this course.</p>
    <div className={s.btn}>
      <Button onClick={cancelHandler} red>
        Cancel
      </Button>
      <Button onClick={submitHandler}>Delete</Button>
    </div>
  </>
);

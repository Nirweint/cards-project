import React from 'react';

import { Star } from 'react-feather';

import s from './Rating.module.css';

import { ReturnComponentType } from 'types';

const PROCENT = 100;

type RatingType = {
  value: number;
  max: number;
};

export const Rating = ({ value, max }: RatingType): ReturnComponentType => {
  const percentage = Math.round((value / max) * PROCENT);

  return (
    <div className={s.container}>
      {Array.from(Array(max).keys()).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Star key={i} className={s.star} />
      ))}
      <div className={s.overlay} style={{ width: `${PROCENT - percentage}%` }} />
    </div>
  );
};

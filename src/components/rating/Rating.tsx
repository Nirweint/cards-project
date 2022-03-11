import React from 'react';
import { Star } from 'react-feather';
import s from './Rating.module.css'

type RatingType = {
    value: number,
    max: number,
}

export const Rating = ({ value, max }: RatingType) => {
    const percentage = Math.round((value / max) * 100);

    return (
        <div className={s.container}>
            {Array.from(Array(max).keys()).map((_, i) => (
                <Star key={i} className={s.star}/>
            ))}
            <div className={s.overlay} style={{ width: `${100 - percentage}%` }} />
        </div>
    );
}


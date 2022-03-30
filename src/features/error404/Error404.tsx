import React from 'react';

import { NavLink } from 'react-router-dom';

import error404Image from '../../assets/images/404Error.png';

import s from './Error404.module.css';

import { PATH } from 'app/routes/RoutesComponent';
import { ReturnComponentType } from 'types';

export const Error404 = (): ReturnComponentType => (
  <div className={s.wrapper}>
    <div className={s.body}>
      <img className={s.image} src={error404Image} alt="Error404" />
      <h3 className={s.link}>
        <NavLink to={PATH.PROFILE}>Return on main page</NavLink>
      </h3>
    </div>
  </div>
);

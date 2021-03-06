import React from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../routes/RoutesComponent';

import s from './Header.module.css';

import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => (
  <header className={s.header}>
    <nav className={s.nav}>
      <NavLink to={PATH.PROFILE}>Profile</NavLink>
      <NavLink to={PATH.PACKS_LIST}>Packs</NavLink>
    </nav>
  </header>
);

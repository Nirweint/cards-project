import React from 'react';

import { Header } from '../header';
import { RoutesComponent } from '../routes';

import s from './Main.module.css';

import { ReturnComponentType } from 'types';

export const Main = (): ReturnComponentType => (
  <div>
    <Header />
    <div className={s.wrapper}>
      <RoutesComponent />
    </div>
  </div>
);

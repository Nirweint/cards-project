import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import PacksList from '../../features/packsList/PacksList';

import {
  CardsList,
  Error404,
  Login,
  NewPasswordEnter,
  PasswordRecovery,
  Profile,
  SignUp,
} from 'features';
import { LearnPage } from 'features/learnPage';
import { ReturnComponentType } from 'types';

export const PATH = {
  PROFILE: '/profile',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  NEW_PASSWORD_ENTER: '/set-new-password/:token',
  PASSWORD_RECOVERY: '/password-recovery',
  ERROR_404: '/error404',
  PACKS_LIST: '/packs-list',
  CARDS_LIST: '/cards-list/:id',
  LEARN_PAGE: '/learn/:id',
};

export const RoutesComponent = (): ReturnComponentType => (
  <Routes>
    <Route index element={<Navigate replace to={PATH.PACKS_LIST} />} />
    <Route path={PATH.PROFILE} element={<Profile />} />
    <Route path={PATH.LOGIN} element={<Login />} />
    <Route path={PATH.SIGN_UP} element={<SignUp />} />
    <Route path={PATH.NEW_PASSWORD_ENTER} element={<NewPasswordEnter />} />
    <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery />} />
    <Route path={PATH.ERROR_404} element={<Error404 />} />
    <Route path={PATH.PACKS_LIST} element={<PacksList />} />
    <Route path={PATH.CARDS_LIST} element={<CardsList />} />
    <Route path={PATH.LEARN_PAGE} element={<LearnPage />} />
  </Routes>
);

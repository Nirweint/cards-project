import React from 'react';

import spinner from '../../../assets/images/spinner.svg';

import { ReturnComponentType } from 'types';

export const Loading = (): ReturnComponentType => <img src={spinner} alt="loading..." />;

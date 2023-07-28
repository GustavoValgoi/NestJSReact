import { RouteObject } from 'react-router-dom';

import User from './';

export enum UserRoutesEnum {
  USER = '/user',
  USER_INSERT = '/user/insert',
}

export const userRoutes: RouteObject[] = [
  {
    path: UserRoutesEnum.USER,
    element: <User />,
  },
];

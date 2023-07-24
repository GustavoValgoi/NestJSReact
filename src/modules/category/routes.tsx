import { RouteObject } from 'react-router-dom';

import Category from './screens/Category';

export enum CategoryRoutesEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
}

export const categoryRoutes: RouteObject[] = [
  {
    path: CategoryRoutesEnum.CATEGORY,
    element: <Category />,
  },
];

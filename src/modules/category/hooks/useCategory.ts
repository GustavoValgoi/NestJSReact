import { useEffect } from 'react';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';

export const useCategory = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  return { categories };
};

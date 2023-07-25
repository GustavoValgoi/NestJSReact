import { useEffect, useState } from 'react';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const [categoriesFiltered, setCategoriesFiltered] = useState([...categories]);
  const { request } = useRequests();

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  useEffect(() => {
    setCategoriesFiltered([...categories]);
  }, [categories]);

  const handleSearch = (value: string) => {
    if (!value) {
      setCategoriesFiltered([...categories]);
    } else {
      setCategoriesFiltered([
        ...categories.filter((category) =>
          category.name.toUpperCase().includes(value.toUpperCase()),
        ),
      ]);
    }
  };

  return { categories: categoriesFiltered, handleSearch };
};

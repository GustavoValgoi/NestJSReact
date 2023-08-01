import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY, URL_CATEGORY_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { CategoryRoutesEnum } from '../routes';

export const useCategory = () => {
  const { request } = useRequests();
  const { categories, setCategories } = useCategoryReducer();
  const { setNotification } = useGlobalReducer();
  const [categoriesFiltered, setCategoriesFiltered] = useState([...categories]);
  const [categoryIdDelete, setCategoryIdDelete] = useState<number | undefined>();
  const navigate = useNavigate();

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
  const handleDeleteCategory = async () => {
    await request(
      URL_CATEGORY_ID.replace('{categoryId}', String(categoryIdDelete)),
      MethodsEnum.DELETE,
    )
      .then(async () => {
        setCategoryIdDelete(undefined);
        await request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories);
        setNotification('Sucesso', 'success', 'Categoria excluída com sucesso.');
      })
      .catch((err: Error) => setNotification('Opss', 'error', err.message));
  };

  const handleCloseModalDelete = () => {
    setCategoryIdDelete(undefined);
  };

  const handleOpenModalDelete = (categoryId: number) => {
    setCategoryIdDelete(categoryId);
  };

  const handleEditCategory = async (categoryId: number) => {
    navigate(CategoryRoutesEnum.CATEGORY_EDIT.replace(':categoryId', String(categoryId)));
  };

  return {
    categories: categoriesFiltered,
    openModalDelete: !!categoryIdDelete,
    handleSearch,
    handleCloseModalDelete,
    handleOpenModalDelete,
    handleDeleteCategory,
    handleEditCategory,
  };
};

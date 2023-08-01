import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY, URL_CATEGORY_ID } from '../../../shared/constants/urls';
import { InsertCategoryDTO } from '../../../shared/dtos/InsertCategory.dto';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { CategoryRoutesEnum } from '../routes';

const DEFAULT_CATEGORY = {
  name: '',
};

export const useInsertCategory = (categoryId?: string) => {
  const [loadingCategory, setLoadingCategory] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [category, setCategory] = useState<InsertCategoryDTO>(DEFAULT_CATEGORY);
  const { request, loading } = useRequests();
  const {
    setCategories,
    category: categoryReducer,
    setCategory: setCategoryReducer,
  } = useCategoryReducer();
  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (category.name) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [category]);

  useEffect(() => {
    if (categoryReducer) {
      setCategory({
        name: categoryReducer.name,
      });
    }
  }, [categoryReducer]);

  useEffect(() => {
    const findCategory = async () => {
      setLoadingCategory(true);
      await request(
        URL_CATEGORY_ID.replace('{categoryId}', categoryId || ''),
        MethodsEnum.GET,
        setCategoryReducer,
      );
      setLoadingCategory(false);
    };

    if (categoryId) {
      setIsEdit(true);
      findCategory();
    } else {
      setIsEdit(false);
      setCategoryReducer(undefined);
      setCategory(DEFAULT_CATEGORY);
    }
  }, [categoryId]);

  const handleSubmit = async () => {
    if (categoryId) {
      await request(
        URL_CATEGORY_ID.replace('{categoryId}', String(categoryId)),
        MethodsEnum.PUT,
        undefined,
        category,
      )
        .then(async () => {
          await request(URL_CATEGORY, MethodsEnum.GET, setCategories);
          setNotification('Categoria atualizada com sucesso.', 'success');
        })
        .catch((err: Error) => {
          setNotification(err.message, 'error');
        });
    } else {
      await request(URL_CATEGORY, MethodsEnum.POST, undefined, category)
        .then(async () => {
          await request(URL_CATEGORY, MethodsEnum.GET, setCategories);
          setNotification('Categoria adicionada com sucesso.', 'success');
        })
        .catch((err: Error) => {
          setNotification(err.message, 'error');
        });
    }
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  return { category, setCategory, loading, disabledButton, handleSubmit, isEdit, loadingCategory };
};

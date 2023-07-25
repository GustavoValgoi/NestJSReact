import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { InsertCategoryDTO } from '../../../shared/dtos/InsertCategory.dto';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { CategoryRoutesEnum } from '../routes';

export const useInsertCategory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [category, setCategory] = useState<InsertCategoryDTO>({
    name: '',
  });
  const { request } = useRequests();
  const { setCategories } = useCategoryReducer();
  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (category.name) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [category]);

  const handleSubmit = async () => {
    setLoading(true);
    await request(URL_CATEGORY, MethodsEnum.POST, undefined, category)
      .then(async () => {
        await request(URL_CATEGORY, MethodsEnum.GET, setCategories);
        setNotification('Categoria adicionada com sucesso.', 'success');
        setLoading(false);
        navigate(CategoryRoutesEnum.CATEGORY);
      })
      .catch((err: Error) => {
        setLoading(false);
        setNotification(err.message, 'error');
      });
  };

  return { category, setCategory, loading, disabledButton, handleSubmit };
};

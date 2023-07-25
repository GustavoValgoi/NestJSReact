import { CategoryType } from '../../../shared/types/CategoryType';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCategoriesAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.category);

  const setCategories = (currentCategories: CategoryType[]) => {
    dispatch(setCategoriesAction(currentCategories));
  };

  return {
    setCategories,
    categories,
  };
};

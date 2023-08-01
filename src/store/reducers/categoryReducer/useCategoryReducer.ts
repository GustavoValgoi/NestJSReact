import { CategoryType } from '../../../shared/types/CategoryType';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCategoriesAction, setCategoryAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useAppDispatch();
  const { categories, category } = useAppSelector((state) => state.category);

  const setCategories = (currentCategories: CategoryType[]) => {
    dispatch(setCategoriesAction(currentCategories));
  };
  const setCategory = (currentCategory?: CategoryType) => {
    dispatch(setCategoryAction(currentCategory));
  };

  return {
    setCategory,
    setCategories,
    categories,
    category,
  };
};

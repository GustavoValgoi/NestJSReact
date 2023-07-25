import { ProductType } from '../../../shared/types/ProductType';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);

  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductsAction(currentProducts));
  };

  return {
    setProducts,
    products,
  };
};

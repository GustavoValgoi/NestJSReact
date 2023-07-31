import { ProductType } from '../../../shared/types/ProductType';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setProductAction, setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useAppDispatch();
  const { products, product } = useAppSelector((state) => state.product);

  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductsAction(currentProducts));
  };
  const setProduct = (currentProduct?: ProductType) => {
    dispatch(setProductAction(currentProduct));
  };

  return {
    setProduct,
    setProducts,
    products,
    product,
  };
};

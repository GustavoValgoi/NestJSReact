import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT, URL_PRODUCT_ID } from '../../../shared/constants/urls';
import { InsertProductDTO } from '../../../shared/dtos/InsertProduct.dto';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductRoutesEnum } from '../routes';

const DEFAULT_PRODUCT = {
  name: '',
  image: '',
  price: 0,
  weight: 0,
  pLength: 0,
  height: 0,
  width: 0,
  diameter: 0,
};

export const useInsertProduct = (productId?: string) => {
  const navigate = useNavigate();
  const { request, loading } = useRequests();
  const { product: productReducer, setProduct: setProductReducer } = useProductReducer();
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [loadingProduct, setLoadingProduct] = useState<boolean>(false);
  const [product, setProduct] = useState<InsertProductDTO>(DEFAULT_PRODUCT);

  useEffect(() => {
    if (product.name && product.image && product.categoryId && product.price > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [product]);

  useEffect(() => {
    if (productReducer) {
      setProduct({
        name: productReducer.name,
        image: productReducer.image,
        price: productReducer.price,
        weight: productReducer.weight,
        pLength: productReducer.pLength,
        height: productReducer.height,
        width: productReducer.width,
        diameter: productReducer.diameter,
        categoryId: productReducer.category?.id,
      });
    }
  }, [productReducer]);

  useEffect(() => {
    const findProduct = async () => {
      setLoadingProduct(true);
      await request(
        URL_PRODUCT_ID.replace('{productId}', productId || ''),
        MethodsEnum.GET,
        setProductReducer,
      );
      setLoadingProduct(false);
    };

    if (productId) {
      setIsEdit(true);
      findProduct();
    } else {
      setIsEdit(false);
      setProductReducer(undefined);
      setProduct(DEFAULT_PRODUCT);
    }
  }, [productId]);

  const handleSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const handleSubmit = async () => {
    if (productId) {
      await request(
        URL_PRODUCT_ID.replace('{productId}', productId),
        MethodsEnum.PUT,
        undefined,
        product,
        'Produto Atualizado.',
      );
    } else {
      await request(URL_PRODUCT, MethodsEnum.POST, undefined, product, 'Produto inserido.');
    }
    navigate(ProductRoutesEnum.PRODUCT);
  };

  return {
    loading,
    loadingProduct,
    disabledButton,
    handleSelect,
    handleSubmit,
    setProduct,
    product,
    isEdit,
  };
};

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT, URL_PRODUCT_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductRoutesEnum } from '../routes';

export const useProduct = () => {
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>([]);
  const { products, setProducts } = useProductReducer();
  const { request } = useRequests();
  const { setNotification } = useGlobalReducer();
  const [productIdDelete, setProductIdDelete] = useState<number | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    setProductsFiltered([...products]);
  }, [products]);

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleSearch = (value: string) => {
    if (!value) {
      setProductsFiltered([...products]);
    } else {
      setProductsFiltered([...productsFiltered.filter((product) => product.name.includes(value))]);
    }
  };

  const handleDeleteProduct = async () => {
    await request(
      URL_PRODUCT_ID.replace('{productId}', String(productIdDelete)),
      MethodsEnum.DELETE,
    )
      .then(async () => {
        setProductIdDelete(undefined);
        await request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
        setNotification('Produto excluído com sucesso.', 'success');
      })
      .catch((err) => setNotification(err.message, 'error'));
  };

  const handleEditProduct = async (productId: number) => {
    navigate(ProductRoutesEnum.PRODUCT_EDIT.replace(':productId', String(productId)));
  };

  const handleCloseModalDelete = () => {
    setProductIdDelete(undefined);
  };

  const handleOpenModalDelete = (productId: number) => {
    setProductIdDelete(productId);
  };

  return {
    products: productsFiltered,
    handleSearch,
    handleDeleteProduct,
    handleEditProduct,
    openModalDelete: !!productIdDelete,
    handleCloseModalDelete,
    handleOpenModalDelete,
  };
};

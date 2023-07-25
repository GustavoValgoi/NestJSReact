import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT } from '../../../shared/constants/urls';
import { InsertProductDTO } from '../../../shared/dtos/InsertProduct.dto';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ProductRoutesEnum } from '../routes';

export const useInsertProduct = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [product, setProduct] = useState<InsertProductDTO>({
    name: '',
    image: '',
    price: 0,
  });

  const { setNotification } = useGlobalReducer();

  useEffect(() => {
    if (product.name && product.image && product.categoryId && product.price > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [product]);

  const handleSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification('Produto adicionado com sucesso.', 'success');
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
    setLoading(false);
  };

  return {
    loading,
    disabledButton,
    handleSelect,
    handleSubmit,
    setProduct,
    product,
  };
};

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ListBreadCrumb } from '../../../shared/components/breadcrumb/Breadcrumb';
import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/urls';
import { InsertProductDTO } from '../../../shared/dtos/InsertProduct.dto';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import Screen from '../../../shared/screen/Screen';
import { Display } from '../../../shared/styles/display.styles';
import { LimitedContainer } from '../../../shared/styles/limited.styles';
import { CategoryType } from '../../../shared/types/CategoryType';
import { ProductRoutesEnum } from '../routes';
import { ProductInsertContainer } from '../styles/productInsert.styles';

const ProductInsert = () => {
  const [product, setProduct] = useState<InsertProductDTO>({
    name: '',
    image: '',
    price: 0,
  });
  const { categories, setCategories } = useDataContext();
  const { setNotification } = useGlobalContext();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length === 0) {
      request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleSubmit = async () => {
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification('Produto adicionado com sucesso.', 'success');
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
  };

  const handleSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const breadcrumb: ListBreadCrumb[] = [
    {
      name: 'Home',
      navigateTo: '/',
    },
    {
      name: 'Produtos',
      navigateTo: ProductRoutesEnum.PRODUCT,
    },
    {
      name: 'Inserir Produto',
    },
  ];

  return (
    <Screen listBreadcrumb={breadcrumb}>
      <ProductInsertContainer>
        <LimitedContainer width={400}>
          <Input
            margin="0 0 15px"
            title="Nome"
            placeholder="Nome"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <Input
            margin="0 0 15px"
            title="Url Imagem"
            placeholder="Url imagem"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
          <InputMoney
            margin="0 0 15px"
            title="Preço"
            placeholder="Preço"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
          />
          <Select
            title="Categoria"
            margin="0 0 32px"
            defaultValue="Selecione uma categoria"
            onChange={handleSelect}
            options={categories.map((category) => ({
              value: category.id.toString(),
              label: category.name,
            }))}
          />
          <Display type="flex" justify="right">
            <LimitedContainer width={120} margin="0 10px 0">
              <Button danger onClick={() => navigate(ProductRoutesEnum.PRODUCT)}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button type="primary" onClick={handleSubmit}>
                Inserir Produto
              </Button>
            </LimitedContainer>
          </Display>
        </LimitedContainer>
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;

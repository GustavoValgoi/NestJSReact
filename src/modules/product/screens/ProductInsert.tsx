import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/screen/Screen';
import { Display } from '../../../shared/styles/display.styles';
import { LimitedContainer } from '../../../shared/styles/limited.styles';
import { useCategory } from '../../category/hooks/useCategory';
import { ProductInsertTestIdEnum } from '../enums/productInsertTestId.enum';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRoutesEnum } from '../routes';

const ProductInsert = () => {
  const navigate = useNavigate();
  const { categories } = useCategory();
  const { loading, product, disabledButton, handleSelect, handleSubmit, setProduct } =
    useInsertProduct();

  return (
    <Screen
      listBreadcrumb={[
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
      ]}
    >
      <Display
        data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER}
        type="flex"
        justify="center"
        width="100%"
      >
        <LimitedContainer width={400}>
          <Input
            data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_NAME}
            margin="0 0 15px"
            title="Nome"
            placeholder="Nome"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <Input
            data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE}
            margin="0 0 15px"
            title="Url Imagem"
            placeholder="Url imagem"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
          <InputMoney
            data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_PRICE}
            margin="0 0 15px"
            title="Preço"
            placeholder="Preço"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
          />
          <Select
            data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_SELECT}
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
              <Button
                data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_CANCEL}
                danger
                onClick={() => navigate(ProductRoutesEnum.PRODUCT)}
              >
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button
                data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_INSERT}
                loading={loading}
                disabled={disabledButton}
                type="primary"
                onClick={handleSubmit}
              >
                Inserir Produto
              </Button>
            </LimitedContainer>
          </Display>
        </LimitedContainer>
      </Display>
    </Screen>
  );
};

export default ProductInsert;

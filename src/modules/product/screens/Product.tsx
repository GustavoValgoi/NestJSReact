import { Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Table from '../../../shared/components/table/Table';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { convertNumberToNumber } from '../../../shared/functions/money';
import { useRequests } from '../../../shared/hooks/useRequests';
import Screen from '../../../shared/screen/Screen';
import { Display } from '../../../shared/styles/display.styles';
import { LimitedContainer } from '../../../shared/styles/limited.styles';
import { ProductType } from '../../../shared/types/ProductType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from '../components/TooltipImage';
import { ProductRoutesEnum } from '../routes';

const { Search } = Input;

const columns: ColumnsType<ProductType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render: (_, product) => <CategoryColumn category={product.category} />,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (_, product) => <a>{convertNumberToNumber(product.price)}</a>,
  },
];

const Product = () => {
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>([]);
  const { products, setProducts } = useProductReducer();
  const { request } = useRequests();
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

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'Home',
          navigateTo: '/',
        },
        {
          name: 'Produtos',
        },
      ]}
    >
      <Display type="flex" justify="space-between" margin="16px 0">
        <LimitedContainer width={500}>
          <Search placeholder="Buscar produto..." onSearch={handleSearch} enterButton />
        </LimitedContainer>
        <LimitedContainer width={200}>
          <Button type="primary" onClick={() => navigate(ProductRoutesEnum.PRODUCT_INSERT)}>
            Novo produto
          </Button>
        </LimitedContainer>
      </Display>
      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;

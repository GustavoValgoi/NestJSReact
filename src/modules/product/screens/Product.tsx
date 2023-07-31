import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Table from '../../../shared/components/table/Table';
import { convertNumberToMoney } from '../../../shared/functions/money';
import Screen from '../../../shared/screen/Screen';
import { Display } from '../../../shared/styles/display.styles';
import { LimitedContainer } from '../../../shared/styles/limited.styles';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from '../components/TooltipImage';
import { useProduct } from '../hooks/useProduct';
import { ProductRoutesEnum } from '../routes';

const { Search } = Input;

const Product = () => {
  const navigate = useNavigate();
  const {
    products,
    handleSearch,
    handleDeleteProduct,
    handleEditProduct,
    openModalDelete,
    handleCloseModalDelete,
    handleOpenModalDelete,
  } = useProduct();

  const columns: ColumnsType<ProductType> = useMemo(
    () => [
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
        render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
      },
      {
        title: 'Ações',
        dataIndex: 'actions',
        key: 'actions',
        render: (_, product) => (
          <>
            <Button
              margin="0 5px 0 0"
              type="primary"
              onClick={() => handleEditProduct(product.id)}
              icon={<EditOutlined />}
              size="middle"
            />
            <Button
              type="primary"
              danger
              onClick={() => handleOpenModalDelete(product.id)}
              icon={<DeleteOutlined />}
              size="middle"
            />
          </>
        ),
      },
    ],
    [],
  );

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
      <Modal
        title="Sair do sistema"
        open={openModalDelete}
        onOk={handleDeleteProduct}
        onCancel={handleCloseModalDelete}
        okText="Sair"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja sair do sistema ?</p>
      </Modal>
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
      <Table columns={columns} dataSource={products} />
    </Screen>
  );
};

export default Product;

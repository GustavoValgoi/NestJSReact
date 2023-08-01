import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Table from '../../../shared/components/table/Table';
import Screen from '../../../shared/screen/Screen';
import { Display } from '../../../shared/styles/display.styles';
import { LimitedContainer } from '../../../shared/styles/limited.styles';
import { CategoryType } from '../../../shared/types/CategoryType';
import { FirstScreenRoutesEnum } from '../../firstScreen/routes';
import { useCategory } from '../hooks/useCategory';
import { CategoryRoutesEnum } from '../routes';

const { Search } = Input;

const Category = () => {
  const {
    categories,
    handleSearch,
    handleCloseModalDelete,
    handleOpenModalDelete,
    handleDeleteCategory,
    openModalDelete,
    handleEditCategory,
  } = useCategory();
  const navigate = useNavigate();

  const columns: ColumnsType<CategoryType> = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Qtd. de Produtos',
        dataIndex: 'amountProduct',
        key: 'amountProduct',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Ações',
        dataIndex: 'actions',
        key: 'actions',
        width: 130,
        render: (_, category) => (
          <>
            <Button
              margin="0 5px 0 0"
              type="primary"
              onClick={() => handleEditCategory(category.id)}
              icon={<EditOutlined />}
              size="middle"
            />
            {category.amountProduct <= 0 && (
              <Button
                type="primary"
                danger
                onClick={() => handleOpenModalDelete(category.id)}
                icon={<DeleteOutlined />}
                size="middle"
              />
            )}
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
          navigateTo: FirstScreenRoutesEnum.FIRST_SCREEN,
        },
        {
          name: 'Categorias',
        },
      ]}
    >
      <Modal
        title="Excluir categoria ?"
        open={openModalDelete}
        onOk={handleDeleteCategory}
        onCancel={handleCloseModalDelete}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja excluir essa categoria ?</p>
      </Modal>
      <Display type="flex" justify="space-between" margin="16px 0">
        <LimitedContainer width={500}>
          <Search placeholder="Buscar categoria..." onSearch={handleSearch} enterButton />
        </LimitedContainer>
        <LimitedContainer width={200}>
          <Button type="primary" onClick={() => navigate(CategoryRoutesEnum.CATEGORY_INSERT)}>
            Nova categoria
          </Button>
        </LimitedContainer>
      </Display>
      <Table columns={columns} dataSource={categories} />
    </Screen>
  );
};

export default Category;

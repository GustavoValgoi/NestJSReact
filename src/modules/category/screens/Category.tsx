import { Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
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

const columns: ColumnsType<CategoryType> = [
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
];

const Category = () => {
  const { categories, handleSearch } = useCategory();
  const navigate = useNavigate();

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

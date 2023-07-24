import { ColumnsType } from 'antd/es/table';

import { ListBreadCrumb } from '../../../shared/components/breadcrumb/Breadcrumb';
import Table from '../../../shared/components/table/Table';
import Screen from '../../../shared/screen/Screen';
import { CategoryType } from '../../../shared/types/CategoryType';
import { FirstScreenRoutesEnum } from '../../firstScreen/routes';
import { useCategory } from '../hooks/useCategory';

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

const breadcrumb: ListBreadCrumb[] = [
  {
    name: 'Home',
    navigateTo: FirstScreenRoutesEnum.FIRST_SCREEN,
  },
  {
    name: 'Categorias',
  },
];

const Category = () => {
  const { categories } = useCategory();

  return (
    <Screen listBreadcrumb={breadcrumb}>
      <Table columns={columns} dataSource={categories} />
    </Screen>
  );
};

export default Category;

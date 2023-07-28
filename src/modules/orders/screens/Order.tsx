import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

import Table from '../../../shared/components/table/Table';
import { convertDate } from '../../../shared/functions/date';
import Screen from '../../../shared/screen/Screen';
import { OrderType } from '../../../shared/types/OrderType';
import { useOrder } from '../hooks/useOrder';
import { OrderRoutesEnum } from '../routes';

const columns: ColumnsType<OrderType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <a>{convertDate(text)}</a>,
  },
  {
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user',
    render: (_, target) => <p>{target.user?.name}</p>,
  },
  {
    title: 'Qtd. de Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <a>{text}</a>,
  },
];

const Order = () => {
  const { orders } = useOrder();

  const navigate = useNavigate();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'Home',
          navigateTo: '/',
        },
        {
          name: 'Pedidos',
        },
      ]}
    >
      <Table
        onRow={(record) => ({
          onClick: () => navigate(OrderRoutesEnum.ORDER_ID.replace(':id', String(record.id))),
        })}
        columns={columns}
        dataSource={orders}
      />
    </Screen>
  );
};

export default Order;

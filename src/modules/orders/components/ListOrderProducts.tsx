import { ColumnsType } from 'antd/es/table';

import Table from '../../../shared/components/table/Table';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { OrdersProductType } from '../../../shared/types/OrdersProductType';

interface ListOrderProductsProps {
  ordersProduct?: OrdersProductType[];
}

const columns: ColumnsType<OrdersProductType> = [
  {
    title: 'Nome do Produto',
    dataIndex: 'name',
    key: 'name',
    render: (_, target) => <a>{target.product?.name}</a>,
  },
  {
    title: 'Quantidade',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => <p>{amount}</p>,
  },
  {
    title: 'Preço de venda',
    dataIndex: 'price',
    key: 'price',
    render: (price) => <a>{convertNumberToMoney(price)}</a>,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (_, target) => (
      <p>{convertNumberToMoney(Number(target.price) * Number(target.amount))}</p>
    ),
  },
];
const ListOrderProducts = ({ ordersProduct }: ListOrderProductsProps) => {
  if (!ordersProduct || !ordersProduct.length) {
    return null;
  }

  return <Table columns={columns} dataSource={ordersProduct} />;
};

export default ListOrderProducts;

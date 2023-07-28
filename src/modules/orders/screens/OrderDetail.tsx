import { Badge, Descriptions, Divider, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import { insertMaskInCEP } from '../../../shared/functions/address';
import { insertMaskInCPF } from '../../../shared/functions/cpf';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import Screen from '../../../shared/screen/Screen';
import { Display } from '../../../shared/styles/display.styles';
import ListOrderProducts from '../components/ListOrderProducts';
import { useOrderDetail } from '../hooks/useOrderDetail';
import { OrderRoutesEnum } from '../routes';

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { order, loading } = useOrderDetail(id);

  console.log(order);

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'Home',
          navigateTo: '/',
        },
        {
          name: 'Pedidos',
          navigateTo: OrderRoutesEnum.ORDER,
        },
        {
          name: 'Detalhe do pedido',
        },
      ]}
    >
      {!order || loading ? (
        <Display type="flex" justify="center">
          <Spin size="large" />
        </Display>
      ) : (
        <>
          <Descriptions title="Dados do Usuário" bordered>
            <Descriptions.Item label="Nome">{order.user?.name}</Descriptions.Item>
            <Descriptions.Item label="E-mail" span={2}>
              {order.user?.email}
            </Descriptions.Item>
            <Descriptions.Item label="CPF">{insertMaskInCPF(order.user?.cpf)}</Descriptions.Item>
            <Descriptions.Item label="Telefone" span={2}>
              {insertMaskInPhone(order.user?.phone)}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do Pagamento" bordered>
            <Descriptions.Item label="Preço">
              {convertNumberToMoney(order.payment?.price || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Desconto" span={2}>
              {convertNumberToMoney(order.payment?.discount || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Preço Final">
              {convertNumberToMoney(order.payment?.finalPrice || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Tipo de Pagamento" span={2}>
              {order.payment?.type}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              <Badge status="processing" text={order.payment?.paymentStatus?.name} />
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do Endereço" bordered>
            <Descriptions.Item label="CEP" span={3}>
              {insertMaskInCEP(order.address?.cep || '')}
            </Descriptions.Item>
            <Descriptions.Item label="Número">{order.address?.numberAddress}</Descriptions.Item>
            <Descriptions.Item label="Complemento" span={2}>
              {order.address?.complement}
            </Descriptions.Item>
            <Descriptions.Item label="Cidade">{order.address?.city?.name}</Descriptions.Item>
            <Descriptions.Item label="Estado" span={2}>
              {order.address?.city?.state?.name}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Produtos" bordered></Descriptions>
          <ListOrderProducts ordersProduct={order.ordersProduct} />
        </>
      )}
    </Screen>
  );
};

export default OrderDetail;

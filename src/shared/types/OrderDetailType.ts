import { AddressType } from './AddressType';
import { OrdersProductType } from './OrdersProductType';
import { OrderType } from './OrderType';
import { PaymentType } from './PaymentType';

export interface OrderDetailType extends OrderType {
  address?: AddressType;
  payment?: PaymentType;
  ordersProduct?: OrdersProductType[];
}

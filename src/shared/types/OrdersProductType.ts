import { ProductType } from './ProductType';

export interface OrdersProductType {
  id: number;
  orderId: number;
  productId: number;
  amount: number;
  price: number;
  product: ProductType;
}

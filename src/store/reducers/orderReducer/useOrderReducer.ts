import { OrderDetailType } from '../../../shared/types/OrderDetailType';
import { OrderType } from '../../../shared/types/OrderType';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setOrderByIdAction, setOrdersAction } from '.';

export const useOrderReducer = () => {
  const dispatch = useAppDispatch();
  const { orders, order } = useAppSelector((state) => state.order);

  const setOrders = (currentOrders: OrderType[]) => {
    dispatch(setOrdersAction(currentOrders));
  };

  const setOrderById = (currentOrder: OrderDetailType) => {
    dispatch(setOrderByIdAction(currentOrder));
  };

  return {
    setOrderById,
    setOrders,
    orders,
    order,
  };
};

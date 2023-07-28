import { useEffect } from 'react';

import { URL_ORDER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';

export const useOrder = () => {
  const { orders, setOrders } = useOrderReducer();
  const { request, loading } = useRequests();

  useEffect(() => {
    if (!orders || !orders.length) {
      request(URL_ORDER_ALL, MethodsEnum.GET, setOrders);
    }
  }, []);

  return { orders, loading };
};

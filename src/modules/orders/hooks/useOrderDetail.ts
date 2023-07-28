import { useEffect } from 'react';

import { URL_ORDER_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';

export const useOrderDetail = (orderId?: string) => {
  const { order, setOrderById } = useOrderReducer();
  const { request, loading } = useRequests();

  useEffect(() => {
    request(URL_ORDER_ID.replace('{orderId}', orderId || ''), MethodsEnum.GET, setOrderById);
  }, []);

  return {
    order,
    loading,
  };
};

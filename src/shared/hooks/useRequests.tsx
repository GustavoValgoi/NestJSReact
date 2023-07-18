import { useState } from 'react';

import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { apiVendas } from '../helpers/axios/axiosInstance';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    return apiVendas
      .get(url)
      .then((result) => {
        return result.data;
      })
      .catch(() => console.log('Houve algum problema na requisição.'));
  };

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);
    const result = await connectionAPIPost(url, body)
      .then((result) => {
        setNotification('Login efetuado com sucesso.', 'success');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });

    setLoading(false);
    return result;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};

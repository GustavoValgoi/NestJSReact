import { AxiosRequestConfig } from 'axios';

import { ERROR_ACCESS_DENIED, ERROR_CONNECTION } from '../../constants/errorsStatus';
import { MethodsEnum } from '../../enums/methos.enum';
import { apiVendas } from '../../helpers/axios/axiosInstance';
import { getAuthorizationToken } from './auth';

export default class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: unknown): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${getAuthorizationToken()}`,
        'Content-Type': 'application/json',
      },
    };

    switch (method) {
      case MethodsEnum.GET:
        return (await apiVendas.get<T>(url, config)).data;
      case MethodsEnum.DELETE:
        return (await apiVendas.delete<T>(url, config)).data;
      case MethodsEnum.POST:
        return (await apiVendas.post<T>(url, body, config)).data;
      case MethodsEnum.PATCH:
        return (await apiVendas.patch<T>(url, body, config)).data;
      case MethodsEnum.PUT:
        return (await apiVendas.put<T>(url, body, config)).data;
      default:
        return (await apiVendas.put<T>(url, body, config)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: unknown): Promise<T> {
    return ConnectionAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            throw new Error(ERROR_ACCESS_DENIED);
          case 403:
            throw new Error(ERROR_ACCESS_DENIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.GET);
};
export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
};
export const connectionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
};
export const connectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
};
export const connectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
};

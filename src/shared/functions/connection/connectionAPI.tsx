import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../../constants/errorsStatus';
import { MethodsEnum } from '../../enums/methos.enum';
import { apiVendas } from '../../helpers/axios/axiosInstance';

export default class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: unknown) {
    switch (method) {
      case MethodsEnum.GET:
        return (await apiVendas.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await apiVendas.delete<T>(url)).data;
      case MethodsEnum.POST:
        return (await apiVendas.post<T>(url, body)).data;
      case MethodsEnum.PATCH:
        return (await apiVendas.patch<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await apiVendas.put<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: unknown) {
    return ConnectionAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            throw new Error(ERROR_ACCESS_DANIED);
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
    });
  }
}

export const connectionAPIGet = async (url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.GET);
};
export const connectionAPIDelete = async (url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.DELETE);
};
export const connectionAPIPost = async (url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.POST, body);
};
export const connectionAPIPatch = async (url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.PATCH, body);
};
export const connectionAPIPut = async (url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.PUT, body);
};

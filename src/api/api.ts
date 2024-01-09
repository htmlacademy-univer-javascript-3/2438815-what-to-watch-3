import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token.ts';
import {BACKEND_URL, REQUEST_TIMEOUT} from '../consts/consts';
import {STATUS_CODE_MAPPING} from '../consts/api-response-statuses';
import {store} from '../store/store';
import {setError} from '../store/system-process/system-process';

const shouldDisplayError = (response: AxiosResponse) => !!STATUS_CODE_MAPPING[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL : BACKEND_URL,
    timeout : REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        store.dispatch(setError(<string>error.response.data));
      }

      throw error;
    }
  );

  return api;
};

import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token.ts';
import {processErrorHandle} from './process-error-handle';
import {BACKEND_URL, REQUEST_TIMEOUT} from '../consts/consts';
import {StatusCodeMapping} from '../consts/api-response-statuses';

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

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
        processErrorHandle(error.message);
      }

      throw error;
    }
  );

  return api;
};

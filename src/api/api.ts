import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token.ts';
import {BACKEND_URL, REQUEST_TIMEOUT} from '../consts/consts';
import {STATUS_CODE_MAPPING} from '../consts/api-response-statuses';
import {store} from '../store/store';
import {setError} from '../store/system-process/system-process';
import {ErrorType} from '../types/error-type';
import {makeErrorMessage} from '../functions/make-error-message/make-error-message';

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
      if (error.response?.data && shouldDisplayError(error.response)) {
        const errorData: ErrorType = <ErrorType>(error.response.data);
        store.dispatch(setError(makeErrorMessage(errorData)));
      }
      throw error;
    }
  );

  return api;
};

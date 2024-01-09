import {configureStore} from '@reduxjs/toolkit';
import {combineReducer} from './combine-reducer';
import {createAPI} from '../api/api';
import {redirect} from '../middlewares/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect)
});

import {configureStore} from '@reduxjs/toolkit';
import {stateReducer} from './reducer.ts';
import {createAPI} from '../api/api';

export const api = createAPI();
export const store = configureStore({
  reducer: stateReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});



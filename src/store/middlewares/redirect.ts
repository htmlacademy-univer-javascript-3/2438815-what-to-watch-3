import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../history-route/browser-history';
import {Middleware} from 'redux';
import {combineReducer} from '../combine-reducer';

type Reducer = ReturnType<typeof combineReducer>
export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }
        return next(action);
      };

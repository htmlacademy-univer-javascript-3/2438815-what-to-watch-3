import {configureStore} from '@reduxjs/toolkit';
import {stateReducer} from './reducer.ts';


export const store = configureStore({reducer: stateReducer});



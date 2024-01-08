import {combineReducers} from '@reduxjs/toolkit';
import {stateReducer} from './main-app-actions/reducer';
import {filmStateReducer} from './film-actions/reducer-film';

export const combineReducer = combineReducers({'mainReducer': stateReducer, 'filmReducer': filmStateReducer});

import {combineReducers} from '@reduxjs/toolkit';
import {stateReducer} from './system-part/system-reducer/system-reducer';
import {filmStateReducer} from './film-part/film-reducer/film-reducer';
import {mainPageStateReducer} from './main-page-part/main-page-reducer/main-page-reducer';

export const combineReducer = combineReducers({'systemReducer': stateReducer, 'filmReducer': filmStateReducer, 'mainPageReducer' : mainPageStateReducer});

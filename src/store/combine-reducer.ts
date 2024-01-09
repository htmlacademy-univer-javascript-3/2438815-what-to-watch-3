import {combineReducers} from '@reduxjs/toolkit';
import {systemProcess} from './system-process/system-process';
import {filmPageProcess} from './film-page-process/film-page-process';
import {mainPageProcess} from './main-page-process/main-page-process';
import {NameSpace} from '../consts/namespace';
import {userProcess} from './user-process/user-process';
import {myFilmsPageProcess} from './my-films-page-process/my-films-page-process';

export const combineReducer = combineReducers({
  [NameSpace.System]: systemProcess.reducer,
  [NameSpace.FilmPage]: filmPageProcess.reducer,
  [NameSpace.MainPage] : mainPageProcess.reducer,
  [NameSpace.MyFilmsPage] : myFilmsPageProcess.reducer,
  [NameSpace.User] : userProcess.reducer
});

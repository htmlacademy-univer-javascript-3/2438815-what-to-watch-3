import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts/namespace';
import {MyFilmsPageProcess} from '../../types/state';
import {Films} from '../../types/film-type';

const initialState: MyFilmsPageProcess = {
  favoriteFilms: [],
};

export const myFilmsPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    loadMyFilms : (state, action : PayloadAction<Films>) => {
      state.favoriteFilms = action.payload;
    },
  },
});

export const {loadMyFilms} = myFilmsPageProcess.actions;

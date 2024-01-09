import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts/namespace';
import {MainPageProcess} from '../../types/state';
import {Films, PromoFilm} from '../../types/film-type';

const initialState: MainPageProcess = {
  genre: 'All genres',
  genreFilms: [],
  allFilms: [],
  promoFilm: undefined,
};

export const mainPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    setActiveGenreFilmsAction : (state, action : PayloadAction<string>) => {
      const genre = action.payload;
      state.genre = genre;
      state.genreFilms = genre === 'All genres' ? state.allFilms : state.allFilms.filter((film) => film.genre.includes(genre));
    },
    loadFilms : (state, action : PayloadAction<Films>) => {
      state.allFilms = action.payload;
      state.genreFilms = action.payload;
    },
    loadPromoFilm : (state, action : PayloadAction<PromoFilm>) => {
      state.promoFilm = action.payload;
    },
  },
});

export const {loadFilms, setActiveGenreFilmsAction, loadPromoFilm} = mainPageProcess.actions;

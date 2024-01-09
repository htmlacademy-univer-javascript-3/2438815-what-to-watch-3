import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts/namespace';
import {FilmPageProcess} from '../../types/state';
import {Film, Films} from '../../types/film-type';
import {Reviews} from '../../types/review-type';

const initialState: FilmPageProcess = {
  currentFilm: undefined,
  similarFilms: [],
  reviews: [],
};

export const filmPageProcess = createSlice({
  name: NameSpace.FilmPage,
  initialState,
  reducers: {
    loadFilm : (state, action : PayloadAction<Film>) => {
      state.currentFilm = action.payload;
    },
    loadSimilarFilms : (state, action : PayloadAction<Films>) => {
      state.similarFilms = action.payload;
    },
    loadReviews : (state, action : PayloadAction<Reviews>) => {
      state.reviews = action.payload;
    },
  },
});

export const {loadFilm, loadSimilarFilms, loadReviews} = filmPageProcess.actions;


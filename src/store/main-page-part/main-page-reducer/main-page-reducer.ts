import {createReducer} from '@reduxjs/toolkit';
import {
  loadFilms,
  loadPromoFilm,
  setActiveGenreFilmsAction,
} from '../main-page-actions/main-page-actions';
import {Films, PromoFilm} from '../../../types/film-type';

export type mainPageStateType = {
  genre: string;
  genreFilms: Films;
  allFilms: Films;
  promoFilm: PromoFilm | undefined;
}

const mainPageState : mainPageStateType = {
  genre: 'All genres',
  genreFilms: [],
  allFilms: [],
  promoFilm: undefined,
};

export const mainPageStateReducer = createReducer(mainPageState, (builder) => {
  builder
    .addCase(setActiveGenreFilmsAction, (state, action) => {
      const genre = action.payload;
      state.genre = genre;
      state.genreFilms = genre === 'All genres' ? state.allFilms : state.allFilms.filter((film) => film.genre.includes(genre));
    })
    .addCase(loadFilms, (state, action) => {
      state.allFilms = action.payload;
      state.genreFilms = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    });
});


import {createReducer} from '@reduxjs/toolkit';
import {
  loadFilms,
  loadPromoFilm,
  requireAuthorization,
  setActiveGenreFilmsAction,
  setError,
  setLoadingStatus
} from './action';
import {Film, Films, PromoFilm} from '../types/film-type';
import {AuthorizationStatus} from "../consts/autorization-status";

export type stateType = {
  currentFilm: Film | undefined;
  genre: string;
  genreFilms: Films;
  allFilms: Films;
  promoFilm: PromoFilm | undefined;
  error: string | null;
  isFilmsDataLoading: boolean;
  authorizationStatus : AuthorizationStatus;
}

const activeState : stateType = {
  currentFilm: undefined,
  genre: 'All genres',
  genreFilms: [],
  allFilms: [],
  promoFilm: undefined,
  error: null,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const stateReducer = createReducer(activeState, (builder) => {
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});


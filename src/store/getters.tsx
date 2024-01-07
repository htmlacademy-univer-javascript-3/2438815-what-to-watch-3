import {stateType} from './reducer';

export const getAllFilms = (state: stateType) => state.allFilms;

export const getGenreFilms = (state: stateType) => state.genreFilms;
export const getPromoFilm = (state: stateType) => state.promoFilm;
export const getFilm = (state: stateType) => state.currentFilm;
export const getCurrentGenre = (state: stateType) => state.genre;
export const getAuthorizationStatus = (state: stateType) => state.authorizationStatus;

export const getError = (state: stateType) => state.error;

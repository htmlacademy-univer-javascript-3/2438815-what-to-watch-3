import {State} from '../types/state';

export const getAllFilms = (state: State) => state.mainReducer.allFilms;
export const getIsFilmDataLoading = (state: State) => state.mainReducer.isFilmsDataLoading;

export const getGenreFilms = (state: State) => state.mainReducer.genreFilms;
export const getPromoFilm = (state: State) => state.mainReducer.promoFilm;
export const getCurrentGenre = (state: State) => state.mainReducer.genre;
export const getAuthorizationStatus = (state: State) => state.mainReducer.authorizationStatus;
export const getError = (state: State) => state.mainReducer.error;

export const getFilm = (state: State) => state.filmReducer.currentFilm;
export const getSimilar = (state: State) => state.filmReducer.similarFilms;
export const getReviews = (state: State) => state.filmReducer.reviews;

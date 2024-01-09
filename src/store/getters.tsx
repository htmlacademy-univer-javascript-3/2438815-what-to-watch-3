import {State} from '../types/state';

export const getIsDataLoading = (state: State) => state.systemReducer.isDataLoading;
export const getAuthorizationStatus = (state: State) => state.systemReducer.authorizationStatus;

export const getAllFilms = (state: State) => state.mainPageReducer.allFilms;
export const getGenreFilms = (state: State) => state.mainPageReducer.genreFilms;
export const getPromoFilm = (state: State) => state.mainPageReducer.promoFilm;
export const getCurrentGenre = (state: State) => state.mainPageReducer.genre;

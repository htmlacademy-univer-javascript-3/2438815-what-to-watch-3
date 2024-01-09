import {State} from '../../types/state';

export const getAllFilms = (state: State) => state.MAIN_PAGE.allFilms;
export const getGenreFilms = (state: State) => state.MAIN_PAGE.genreFilms;
export const getPromoFilm = (state: State) => state.MAIN_PAGE.promoFilm;
export const getCurrentGenre = (state: State) => state.MAIN_PAGE.genre;

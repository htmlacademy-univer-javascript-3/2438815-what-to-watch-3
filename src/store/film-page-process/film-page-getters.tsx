import {State} from '../../types/state';

export const getFilm = (state: State) => state.FILM.currentFilm;
export const getSimilar = (state: State) => state.FILM.similarFilms;
export const getReviews = (state: State) => state.FILM.reviews;

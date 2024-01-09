import {State} from '../../../types/state';

export const getFilm = (state: State) => state.filmReducer.currentFilm;
export const getSimilar = (state: State) => state.filmReducer.similarFilms;
export const getReviews = (state: State) => state.filmReducer.reviews;

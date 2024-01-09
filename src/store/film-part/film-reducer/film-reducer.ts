import {createReducer} from '@reduxjs/toolkit';
import {
  loadFilm,
  loadSimilarFilms,
  loadReviews,
} from '../film-actions/film-actions';
import {Film, Films} from '../../../types/film-type';
import {Reviews} from '../../../types/review-type';

export type filmStateType = {
  currentFilm: Film | undefined;
  similarFilms: Films;
  reviews: Reviews;
}

const activeState : filmStateType = {
  currentFilm: undefined,
  similarFilms: [],
  reviews: [],
};

export const filmStateReducer = createReducer(activeState, (builder) => {
  builder
    .addCase(loadFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});


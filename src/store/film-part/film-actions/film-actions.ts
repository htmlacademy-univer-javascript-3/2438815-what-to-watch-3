import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../../../types/film-type';
import {Reviews} from '../../../types/review-type';

export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');
export const loadFilm = createAction<Film>('data/loadFilm');
export const loadReviews = createAction<Reviews>('data/loadReviews');

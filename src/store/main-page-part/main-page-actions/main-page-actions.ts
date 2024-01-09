import {createAction} from '@reduxjs/toolkit';
import {Films, PromoFilm} from '../../../types/film-type';

export const setActiveGenreFilmsAction = createAction<string>('films/activeGenre');

export const loadFilms = createAction<Films>('data/loadFilms');
export const loadPromoFilm = createAction<PromoFilm>('data/loadPromoFilm');
export const loadMyFilms = createAction<Films>('data/loadPromoFilm');

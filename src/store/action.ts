import {createAction} from '@reduxjs/toolkit';
import {Films, PromoFilm} from '../types/film-type';
import {AuthorizationStatus} from '../consts/autorization-status';
import {AppRoute} from '../consts/app-route';

export const setActiveGenreFilmsAction = createAction<string>('films/activeGenre');

export const loadFilms = createAction<Films>('data/loadFilms');
export const loadPromoFilm = createAction<PromoFilm>('data/loadPromoFilm');
export const loadMyFilms = createAction<Films>('data/loadPromoFilm');

export const setLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/error');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

import {createAction} from '@reduxjs/toolkit';
import {genreLabels} from '../consts/genre-labels';

export const setActiveGenreFilmsAction = createAction<genreLabels>('films/activeGenre');
export const incVisibleCountAction = createAction('films/incVisibleCount');
export const restartVisibleCountAction = createAction('films/restartVisibleCount');


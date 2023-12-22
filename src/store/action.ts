import {createAction} from '@reduxjs/toolkit';
import {genreLabels} from '../consts/genre-labels';

export const setActiveGenreFilmsAction = createAction<genreLabels>('films/activeGenre');


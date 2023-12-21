import {createAction} from '@reduxjs/toolkit';
import {genreLabels} from '../consts/genre-labels';

export const getActiveGenreFilmsAction = createAction<genreLabels>('films/activeGenre');


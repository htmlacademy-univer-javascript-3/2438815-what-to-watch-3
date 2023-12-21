import {createAction} from '@reduxjs/toolkit';
import {genreLabels} from '../consts/genre-labels';

export const getAllGenresFilms = createAction('films/allGenres');
export const getActiveGenreFilms = createAction<genreLabels>('films/activeGenre');


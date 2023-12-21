import {createReducer} from '@reduxjs/toolkit';
import {getActiveGenreFilms, getAllGenresFilms} from './action';
import {Films} from '../types/film-type';
import {films} from '../mocks/film';

type stateType = {
  genre: string;
  genreFilmsList: Films;
}

const initialState : stateType = {
  genre: 'All genres',
  genreFilmsList: films,
};

export const stateReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllGenresFilms, (state) => {
    state.genre = 'All genres';
    state.genreFilmsList = films;
  });
  builder.addCase(getActiveGenreFilms, (state, action) => {
    const genre = action.payload;
    state.genre = genre;
    state.genreFilmsList = films.filter((film) => film.genre.includes(genre));
  });
});


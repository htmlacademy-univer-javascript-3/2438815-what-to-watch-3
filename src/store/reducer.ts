import {createReducer} from '@reduxjs/toolkit';
import {setActiveGenreFilmsAction} from './action';
import {Films} from '../types/film-type';
import {films} from '../mocks/film';
import {genreLabels} from '../consts/genre-labels';

type stateType = {
  genre: string;
  genreFilmsList: Films;
}

const activeState : stateType = {
  genre: genreLabels.All,
  genreFilmsList: films,
};

export const stateReducer = createReducer(activeState, (builder) => {
  builder.addCase(setActiveGenreFilmsAction, (state, action) => {
    const genre = action.payload;
    state.genre = genre;
    state.genreFilmsList = genre === genreLabels.All ? films : films.filter((film) => film.genre.includes(genre));
  });
});


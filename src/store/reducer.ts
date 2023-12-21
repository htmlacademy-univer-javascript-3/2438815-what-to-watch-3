import {createReducer} from '@reduxjs/toolkit';
import {setActiveGenreFilmsAction, incVisibleCountAction} from './action';
import {Films} from '../types/film-type';
import {films} from '../mocks/film';
import {genreLabels} from '../consts/genre-labels';

type stateType = {
  genre: string;
  genreFilmsList: Films;
  visibleFilmCardsCount: number;
}

const activeState : stateType = {
  genre: genreLabels.All,
  genreFilmsList: films,
  visibleFilmCardsCount: Math.min(8, films.length),
};

export const stateReducer = createReducer(activeState, (builder) => {
  builder.addCase(setActiveGenreFilmsAction, (state, action) => {
    const genre = action.payload;
    state.genre = genre;
    state.visibleFilmCardsCount = Math.min(8, films.length);
    state.genreFilmsList = genre === genreLabels.All ? films : films.filter((film) => film.genre.includes(genre));
  });
  builder.addCase(incVisibleCountAction, (state) => {
    state.visibleFilmCardsCount = Math.min(state.visibleFilmCardsCount + 8, films.length);
  });
});


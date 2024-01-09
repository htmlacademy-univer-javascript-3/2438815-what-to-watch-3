import {store} from '../store/store';
import {AuthorizationStatus} from '../consts/autorization-status';
import {Film, Films, PromoFilm} from './film-type';
import {Reviews} from './review-type';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
export type SystemProcess = {
  isDataLoading: boolean;
  error: string | null;
};

export type MainPageProcess = {
  genre: string;
  genreFilms: Films;
  allFilms: Films;
  promoFilm: PromoFilm | undefined;
}

export type FilmPageProcess = {
  currentFilm: Film | undefined;
  similarFilms: Films;
  reviews: Reviews;
}

export type MyFilmsPageProcess = {
  favoriteFilms: Films;
}

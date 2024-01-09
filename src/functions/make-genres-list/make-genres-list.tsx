import {CatalogFilm} from '../../types/film-type';

export function makeGenreList(films : CatalogFilm[]): string[] {
  const genres = ['All genres'].concat([...new Set(films.map((film) => film.genre))].slice(0, 9));
  return genres;
}

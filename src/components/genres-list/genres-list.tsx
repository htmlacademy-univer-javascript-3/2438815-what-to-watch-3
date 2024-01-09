import {memo, useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setActiveGenreFilmsAction} from '../../store/main-page-part/main-page-actions/main-page-actions';
import {getAllFilms, getCurrentGenre} from '../../store/getters';
import {makeGenreList} from '../../functions/make-genres-list/make-genres-list';

type GenreListProps = {
  onClickProp: () => void;
}
function GenresList({onClickProp}: GenreListProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getCurrentGenre);
  const allFilms = useAppSelector(getAllFilms);
  const makeGenresListCallback = useCallback(() => makeGenreList(allFilms), [allFilms]);
  return (
    <ul className="catalog__genres-list">
      {makeGenresListCallback().map((genre) => (
        <li className={genre === activeGenre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} key={genre}>
          <nav className="catalog__genres-link" onClick={() => {
            onClickProp();
            dispatch(setActiveGenreFilmsAction(genre));
          }}
          >
            {genre}
          </nav>
        </li>))}
    </ul>
  );
}

export default memo(GenresList);

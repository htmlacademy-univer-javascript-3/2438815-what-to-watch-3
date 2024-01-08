import {useAppDispatch, useAppSelector} from '../../hooks';
import {setActiveGenreFilmsAction} from '../../store/main-app-actions/main-app-actions';
import {getAllFilms, getCurrentGenre} from '../../store/getters';

export default GenresList;

type GenreListProps = {
  onClickProp: () => void;
}
function GenresList({onClickProp}: GenreListProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const genresList = ['All genres'].concat([...new Set(useAppSelector(getAllFilms).map((film) => film.genre))].slice(0, 9));
  const activeGenre = useAppSelector(getCurrentGenre);
  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
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

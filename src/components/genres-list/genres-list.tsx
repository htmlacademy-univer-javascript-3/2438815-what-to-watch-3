import {genreLabels} from '../../consts/genre-labels';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setActiveGenreFilmsAction} from '../../store/action';

export default GenresList;

type GenreListProps = {
  onClickProp: () => void;
}
function GenresList({onClickProp}: GenreListProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);
  return (
    <ul className="catalog__genres-list">
      {Object.values(genreLabels).map((genre) => (
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
import {genreLabels} from '../../consts/genre-labels';
import {Link} from 'react-router-dom';
export default GenresList;
function GenresList() : JSX.Element {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <Link to="#" className="catalog__genres-link">All genres</Link>
      </li>
      {Object.values(genreLabels).map((genre) => (
        <li className="catalog__genres-item" key={genre}>
          <Link to="#" className="catalog__genres-link">{genre}</Link>
        </li>))}
    </ul>
  );
}


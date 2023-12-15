import {genres} from '../../consts';
import {Link} from 'react-router-dom';
export default GenresCatalog;
function GenresCatalog(){
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <Link to="#" className="catalog__genres-link">All genres</Link>
      </li>
      {Object.values(genres).map((genre) => (
        <li className="catalog__genres-item" key={genre}>
          <Link to="#" className="catalog__genres-link">{genre}</Link>
        </li>))}
    </ul>
  );
}


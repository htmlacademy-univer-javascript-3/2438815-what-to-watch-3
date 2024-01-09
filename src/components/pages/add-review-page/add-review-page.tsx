import {Link, useParams} from 'react-router-dom';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import AddReviewForm from '../../add-review-form/add-review-form';
import FilmCardImg from '../../film-card/film-card-img';
import {useAppSelector} from '../../../hooks';
import {getFilm} from '../../../store/film-page-process/film-page-getters';
import NotFoundPage from '../not-found-page/not-found-page';
export default AddReviewPage;

function AddReviewPage() {
  const film = useAppSelector(getFilm);
  const id = useParams().id;
  if(!id) {
    return(<NotFoundPage/>);
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardImg img={film?.backgroundImage} alt={film?.name} className={'film-card__bg'} ></FilmCardImg>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo logoClassName="logo__link"/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="film-page.html" className="breadcrumbs__link">
                  {film?.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <FilmCardImg img={film?.backgroundImage} alt={film?.name} className={'film-card__poster film-card__poster--small'} width={218} height={327}></FilmCardImg>
      </div>
      <AddReviewForm filmId={id}/>
    </section>
  );
}

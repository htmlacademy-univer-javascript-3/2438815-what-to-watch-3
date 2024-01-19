import {Link, useParams} from 'react-router-dom';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import AddReviewForm from '../../add-review-form/add-review-form';
import FilmCardImg from '../../film-card/film-card-img';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getFilm} from '../../../store/film-page-process/film-page-getters';
import NotFoundPage from '../not-found-page/not-found-page';
import {getAuthorizationStatus} from '../../../store/user-process/user-getters';
import {AuthorizationStatus} from '../../../consts/autorization-status';
import {getError} from '../../../store/system-process/system-getters';
import {useEffect, useState} from 'react';
import {fetchFilmAction} from '../../../store/api-actions';
import {APP_ROUTE} from '../../../consts/app-route';

export default AddReviewPage;

function AddReviewPage() {
  const id = useParams().id || '';
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!film || film.id !== id) {
      dispatch(fetchFilmAction(id));
    }
  }, [dispatch, id, film]);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const error = useAppSelector(getError);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  if(!id || authorizationStatus !== AuthorizationStatus.Auth) {
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
                <Link to={APP_ROUTE.FILM(id)} className="breadcrumbs__link">
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
      <AddReviewForm filmId={id} isErrorVisible={setIsErrorVisible}/>
      {isErrorVisible && <pre>{error}</pre>}
    </section>
  );
}

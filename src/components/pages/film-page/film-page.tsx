import {useEffect, useState} from 'react';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import Footer from '../../footer/footer';
import {Link, useParams} from 'react-router-dom';
import FilmsList from '../../films-list/films-list';
import {tabLabels} from '../../../consts/tab-labels';
import {AppRoute} from '../../../consts/app-route';
import TabNavElement from '../../tab-navigation-element/tab-navigation-element';
import FilmOverview from '../../tabs/overview';
import FilmDetails from '../../tabs/details';
import FilmReviews from '../../tabs/reviews';
import {TabsType} from '../../../types/tab-type';
import FilmCardImg from '../../film-card/film-card-img';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getAuthorizationStatus} from '../../../store/user-process/user-getters';
import {getFilm, getReviews, getSimilar} from '../../../store/film-page-process/film-page-getters';
import {fetchFilmAction, fetchReviewsAction, fetchSimilarFilmsAction} from '../../../store/api-actions';
import {AuthorizationStatus} from '../../../consts/autorization-status';
import {getIsDataLoading} from '../../../store/system-process/system-getters';
import {LoadingPage} from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {PlayButton} from '../../buttons/play-button/play-button';
import {MyListButton} from "../../buttons/my-list-button/my-list-button";

export default FilmPage;
function FilmPage(){
  const [activeLabel, setActiveLabel] = useState<string>(tabLabels.Overview);
  const film = useAppSelector(getFilm);
  const reviews = useAppSelector(getReviews);
  const similarFilms = useAppSelector(getSimilar);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoading = useAppSelector(getIsDataLoading);
  const id = useParams().id || '';
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!film || film.id !== id) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchReviewsAction(id));
    }
  });
  if (film) {
    const tabs: TabsType = [
      {label: 'Overview', tab: <FilmOverview film={film}/>},
      {label: 'Details', tab: <FilmDetails film={film}/>},
      {label: 'Reviews', tab: <FilmReviews reviews={reviews}/>},
    ];
    return (
      <body>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <FilmCardImg img={film?.backgroundImage} alt={film?.name} className={'film-card__bg'}></FilmCardImg>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header film-card__head">
              <Logo logoClassName="logo__link"/>
              <UserBlock/>
            </header>
            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film?.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film?.genre}</span>
                  <span className="film-card__year">{film?.released}</span>
                </p>
                <div className="film-card__buttons">
                  <PlayButton id={id}/>
                  <MyListButton/>
                  {authorizationStatus === AuthorizationStatus.Auth &&
                    <Link to={AppRoute.AddReview(id)} className="btn film-card__button"> Add review </Link>}
                </div>
              </div>
            </div>
          </div>
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <FilmCardImg img={film?.backgroundImage} alt={film?.name} className={'film-card__poster film-card__poster--big'}></FilmCardImg>
              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    {tabs.map((tab) => (
                      <TabNavElement key={tab.label} className={tab.label !== activeLabel ? 'film-nav__item' : 'film-nav__item film-nav__item--active'} label={tab.label} setActiveLabel={setActiveLabel}/>))}
                  </ul>
                </nav>
                {tabs.filter((tabElement) => tabElement.label === activeLabel)[0].tab}
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList films={similarFilms} filmsCount={4}/>
          </section>
          <Footer/>
        </div>
      </body>
    );
  } else{
    if (isDataLoading){
      return (<LoadingPage/>);
    } else {
      return(<NotFoundPage/>);
    }
  }
}

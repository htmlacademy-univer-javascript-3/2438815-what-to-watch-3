import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';
import FilmsList from '../films-list/films-list';
import {Films} from '../../types/film-type';
import {AppRoute} from '../../consts';

export default MovieDetailsPage;

type MovieDetailsPageProps = {
  films: Films;
}
function MovieDetailsPage({films}: MovieDetailsPageProps){
  return(
    <body>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo logoClassName={'logo__link'}></Logo>
            <UserBlock></UserBlock>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <Link to={AppRoute.Player}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                  </Link>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <Link to={AppRoute.MyList}>
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  </Link>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={AppRoute.AddReview} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <a href="src/components/tabs/movie-page-details#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <a href="src/components/tabs/movie-page-details#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="src/components/tabs/movie-page-details#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">Wes Anderson</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                      Bill Murray, <br/>
                      Edward Norton, <br/>
                      Jude Law, <br/>
                      Willem Dafoe, <br/>
                      Saoirse Ronan, <br/>
                      Tony Revoloru, <br/>
                      Tilda Swinton, <br/>
                      Tom Wilkinson, <br/>
                      Owen Wilkinson, <br/>
                      Adrien Brody, <br/>
                      Ralph Fiennes, <br/>
                      Jeff Goldblum
                    </span>
                  </p>
                </div>
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">1h 39m</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">Comedy</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">2014</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films} filmsCount={4}></FilmsList>
        </section>
        <Footer></Footer>
      </div>
    </body>
  );
}

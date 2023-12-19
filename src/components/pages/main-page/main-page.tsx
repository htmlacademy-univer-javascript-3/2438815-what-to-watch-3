import Logo from '../../logo/logo';
import Footer from '../../footer/footer';
import UserBlock from '../../user-block/user-block';
import GenresList from '../../genres-list/genres-list';
import {Films} from '../../../types/film-type';
import FilmsList from '../../films-list/films-list';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../consts';
import FilmCardImg from '../../film-card/film-card';

export default MainPage;

type MainPageProps = {
  promoFilmTitle : string;
  promoFilmGenre : string;
  promoFilmYear : number;
  films: Films;
}
function MainPage({ promoFilmTitle, promoFilmGenre, promoFilmYear, films } : MainPageProps) : JSX.Element {
  return (
    <body>
      <section className="film-card">
        <FilmCardImg imgSrc={'img/bg-the-grand-budapest-hotel.jpg'} imgAlt={'The Grand Budapest Hotel'} className={'film-card__bg'}></FilmCardImg>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo logoClassName="logo__link"/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardImg imgSrc={'img/the-grand-budapest-hotel-poster.jpg'} imgAlt={'The Grand Budapest Hotel poster'} className={'film-card__poster'} width={218} height={327}></FilmCardImg>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <Link to={AppRoute.Player}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                  </Link>
                  <span>
                    Play
                  </span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList/>
          <FilmsList films={films}/>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </body>
  );
}

import FilmCardImg from '../film-card/film-card-img';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts/app-route';
import {useAppSelector} from '../../hooks';
import {getPromoFilm} from '../../store/main-page-process/main-page-getters';

export function PromoFilm() : JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);
  return(
    <section className="film-card">
      <FilmCardImg img={promoFilm?.backgroundImage} alt={promoFilm?.name} className={'film-card__bg'}></FilmCardImg>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo logoClassName="logo__link"/>
        <UserBlock/>
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <FilmCardImg img={promoFilm?.backgroundImage} alt={promoFilm?.name} className={'film-card__poster'} width={218} height={327}></FilmCardImg>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm?.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm?.genre}</span>
              <span className="film-card__year">{promoFilm?.released}</span>
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
                <span>
                    My list
                </span>
                <span className="film-card__count">9</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

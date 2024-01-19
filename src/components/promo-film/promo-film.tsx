import FilmCardImg from '../film-card/film-card-img';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import {useAppSelector} from '../../hooks';
import {getPromoFilm} from '../../store/main-page-process/main-page-getters';
import {PlayButton} from '../buttons/play-button/play-button';
import {MyListButton} from '../buttons/my-list-button/my-list-button';

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
              <PlayButton id={promoFilm?.id ? promoFilm.id : ''}/>
              {promoFilm && <MyListButton id={promoFilm?.id ? promoFilm.id : ''}/>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Footer from '../../footer/footer';
import GenresList from '../../genres-list/genres-list';
import FilmsList from '../../films-list/films-list';
import {useAppSelector} from '../../../hooks';
import {useCallback, useState} from 'react';
import ShowMoreButton from '../../buttons/show-more-button/show-more-button';
import {getAuthorizationStatus} from '../../../store/user-process/user-getters';
import {getGenreFilms} from '../../../store/main-page-process/main-page-getters';
import {PromoFilm} from '../../promo-film/promo-film';
import {AuthorizationStatus} from '../../../consts/autorization-status';
import {HeadGuest} from '../../head-guest/head-guest';

export default MainPage;

function MainPage() : JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const filmsList = useAppSelector(getGenreFilms);
  const [visibleFilmCardsCount, setVisibleFilmCardsCount] = useState(Math.min(8, filmsList.length));
  const onClickShowMore = () => setVisibleFilmCardsCount(Math.min(visibleFilmCardsCount + 8, filmsList.length));
  const onClickGenres = useCallback(() => setVisibleFilmCardsCount(Math.min(8, filmsList.length)),[setVisibleFilmCardsCount]);
  return (
    <>
      {authStatus === AuthorizationStatus.Auth ? <PromoFilm/> : <HeadGuest/>}
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList onClickProp={onClickGenres}/>
          <FilmsList films={filmsList} filmsCount={visibleFilmCardsCount}/>
          { visibleFilmCardsCount < filmsList.length && <ShowMoreButton onClickProp={onClickShowMore}></ShowMoreButton> }
        </section>
        <Footer/>
      </div>
    </>
  );
}

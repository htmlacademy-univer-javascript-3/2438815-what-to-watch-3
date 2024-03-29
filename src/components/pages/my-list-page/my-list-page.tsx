import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import Footer from '../../footer/footer';
import FilmsList from '../../films-list/films-list';
import {useAppSelector} from '../../../hooks';
import {getMyFilms} from '../../../store/my-films-page-process/my-films-page-getter';

export default MyListPage;


function MyListPage() : JSX.Element {
  const films = useAppSelector(getMyFilms);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo logoClassName="logo__link"/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>
      <Footer/>
    </div>
  );
}

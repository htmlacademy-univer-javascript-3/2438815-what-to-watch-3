import {Link} from 'react-router-dom';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import AddReviewForm from '../../add-review-form/add-review-form';
import FilmCardImg from '../../film-card/film-card';
export default AddReviewPage;

function AddReviewPage() {
  return (
    <body>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <FilmCardImg imgSrc={'img/bg-the-grand-budapest-hotel.jpg'} imgAlt={'The Grand Budapest Hotel'} className={'film-card__bg'}></FilmCardImg>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo logoClassName="logo__link"/>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="film-page.html" className="breadcrumbs__link">
                    The Grand Budapest Hotel
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <UserBlock/>
          </header>
          <FilmCardImg imgSrc={'img/the-grand-budapest-hotel-poster.jpg'} imgAlt={'The Grand Budapest Hotel poster'} className={'film-card__poster'} width={218} height={327}></FilmCardImg>
        </div>
        <AddReviewForm/>
      </section>
    </body>
  );
}

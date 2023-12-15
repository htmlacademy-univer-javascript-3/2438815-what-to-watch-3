import {Link} from 'react-router-dom';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import FilmCardPoster from '../../film-card/film-card-poster';
import FilmCardBg from '../../film-card/film-card-bg';
import {ImgDataType} from '../../../types/img-data-type';
import AddReviewForm from '../../add-review-form/add-review-form';
export default AddReviewPage;

type AddReviewPageProps = {
  bgData: ImgDataType;
  posterData: ImgDataType;
}
function AddReviewPage({bgData, posterData} : AddReviewPageProps) {
  return (
    <body>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <FilmCardBg imgSrc={bgData.imgSrc} imgAlt={bgData.imgAlt}/>
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
          <FilmCardPoster imgSrc={posterData.imgSrc} imgAlt={posterData.imgAlt}/>
        </div>
        <AddReviewForm/>
      </section>
    </body>
  );
}

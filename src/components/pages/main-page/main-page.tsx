import FilmCard from '../../film-card/film-card';
import Logo from '../../logo/logo';
import Footer from '../../footer/footer';
import UserBlock from '../../user-block/user-block';
import GenresCatalog from '../../catalog-genres/catalog-genres';

export default MainPage;

type MainPageProps = {
  promoFilmTitle : string;
  promoFilmGenre : string;
  promoFilmYear : number;
}
function MainPage({ promoFilmTitle, promoFilmGenre, promoFilmYear } : MainPageProps) : JSX.Element {
  return (
    <body>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo logoClassName="logo__link"/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
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
          <GenresCatalog/>

          <div className="catalog__films-list">
            <FilmCard filmTitle = "Fantastic Beasts: The Crimes of Grindelwald" imgPath = "img/fantastic-beasts-the-crimes-of-grindelwald.jpg"/>
            <FilmCard filmTitle = "Bohemian Rhapsody" imgPath = "img/bohemian-rhapsody.jpg"/>
            <FilmCard filmTitle = "Macbeth" imgPath = "img/macbeth.jpg"/>
            <FilmCard filmTitle = "Aviator" imgPath = "img/aviator.jpg"/>
            <FilmCard filmTitle = "We need to talk about Kevin" imgPath = "img/we-need-to-talk-about-kevin.jpg"/>
            <FilmCard filmTitle = "What We Do in the Shadows" imgPath = "img/what-we-do-in-the-shadows.jpg"/>
            <FilmCard filmTitle = "Revenant" imgPath = "img/revenant.jpg"/>
            <FilmCard filmTitle = "Johnny English" imgPath = "img/johnny-english.jpg"/>
            <FilmCard filmTitle = "Shutter Island" imgPath = "img/shutter-island.jpg"/>
            <FilmCard filmTitle = "Pulp Fiction" imgPath = "img/pulp-fiction.jpg"/>
            <FilmCard filmTitle = "No Country for Old Men" imgPath = "img/no-country-for-old-men.jpg"/>
            <FilmCard filmTitle = "Snatch" imgPath = "img/snatch.jpg"/>
            <FilmCard filmTitle = "Moonrise Kingdom" imgPath = "img/moonrise-kingdom.jpg"/>
            <FilmCard filmTitle = "Seven Years in Tibet" imgPath = "img/seven-years-in-tibet.jpg"/>
            <FilmCard filmTitle = "Midnight Special" imgPath = "img/midnight-special.jpg"/>
            <FilmCard filmTitle = "War of the Worlds" imgPath = "img/war-of-the-worlds.jpg"/>
            <FilmCard filmTitle = "Dardjeeling Limited" imgPath = "img/dardjeeling-limited.jpg"/>
            <FilmCard filmTitle = "Orlando" imgPath = "img/orlando.jpg"/>
            <FilmCard filmTitle = "Mindhunter" imgPath = "img/mindhunter.jpg"/>
            <FilmCard filmTitle = "Midnight Special" imgPath = "img/midnight-special.jpg"/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </body>
  );
}

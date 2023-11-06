import FilmCard from '../../film-card/film-card';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import Footer from '../../footer/footer';

function MyList() : JSX.Element {
  return (
    <body>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo logoClassName="logo__link"/>
          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
          <UserBlock/>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
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
          </div>
        </section>
        <Footer/>
      </div>
    </body>
  );
}

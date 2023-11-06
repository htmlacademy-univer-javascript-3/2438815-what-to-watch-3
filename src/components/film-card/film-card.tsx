export default FilmCard;

type FilmCardProps = {
  filmTitle : string;
  imgPath : string;
};

const cardHeight = 175;
const cardWidth = 280;

function FilmCard({filmTitle, imgPath} : FilmCardProps) : JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={imgPath}
          alt={filmTitle}
          width={cardWidth}
          height={cardHeight}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmTitle}</a>
      </h3>
    </article>
  );
}

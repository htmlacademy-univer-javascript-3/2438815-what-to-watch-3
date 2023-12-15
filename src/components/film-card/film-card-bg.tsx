export default FilmCardCatalog;

type FilmCardBGProps = {
  imgSrc: string;
  imgAlt: string;

}

function FilmCardCatalog({imgSrc, imgAlt} : FilmCardBGProps) : JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={imgSrc} alt={imgAlt}/>
    </div>
  );
}


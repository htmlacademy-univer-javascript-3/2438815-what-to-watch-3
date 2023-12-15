export default FilmCardPoster;

type FilmCardPosterProps = {
  imgSrc: string;
  imgAlt: string;

}

function FilmCardPoster({imgSrc, imgAlt} : FilmCardPosterProps) : JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={imgSrc}
        alt={imgAlt}
        width={218}
        height={327}
      />
    </div>
  );
}

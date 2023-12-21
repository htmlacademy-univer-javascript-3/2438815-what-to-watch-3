import {FilmType} from '../../types/film-type';

export default FilmOverview;

type FilmOverviewProps = {
  film: FilmType;
}
function FilmOverview({film} : FilmOverviewProps){
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.rating.level}</span>
          <span className="film-rating__count">{film.rating.count} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {film.description}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring">
          <strong>
            Starring: {film.starring.slice(0, film.starring.length / 2).join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

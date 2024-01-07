import {Film} from '../../types/film-type';
import {ratingLevelGenerate} from '../../functions/rating-level-generate/rating-level-generate';
export default FilmOverview;

type FilmOverviewProps = {
  film: Film;
}
function FilmOverview({film} : FilmOverviewProps){
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevelGenerate(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
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

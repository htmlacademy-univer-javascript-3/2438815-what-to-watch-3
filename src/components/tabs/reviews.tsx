import {FilmType} from '../../types/film-type';
import ReviewsList from '../reviews-list/reviews-list';
import {Reviews} from '../../types/review-type';

export default FilmReviews;

type FilmReviewsProps = {
  film: FilmType;
  reviews: Reviews;
}
function FilmReviews({film, reviews}: FilmReviewsProps){
  return(
    <ReviewsList reviews={reviews.filter((review) => review.filmId === film.id)}/>
  );
}

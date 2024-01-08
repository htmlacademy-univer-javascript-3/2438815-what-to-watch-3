import ReviewsList from '../reviews-list/reviews-list';
import {Reviews} from '../../types/review-type';

export default FilmReviews;

type FilmReviewsProps = {
  reviews: Reviews;
}
function FilmReviews({reviews}: FilmReviewsProps){
  return(
    <ReviewsList reviews={reviews}/>
  );
}

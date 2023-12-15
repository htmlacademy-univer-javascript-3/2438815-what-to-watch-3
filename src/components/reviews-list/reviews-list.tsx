import {Reviews} from '../../types/review-type';
import Review from '../review/review';
type ReviewsProps = {
  reviews: Reviews;
}
export default function ReviewsList({reviews} : ReviewsProps) : JSX.Element {
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => {
          const keyValue = review.id;
          return (<Review key={keyValue} text={review.text} author={review.author} date={review.date} rating={review.rating}/>);
        })}
      </div>
    </div>
  );
}

import {Reviews} from '../../types/review-type';
import Review from '../review/review';
import {dateTimeConvert} from '../../functions/datetime-convert/datetime-convert';
type ReviewsProps = {
  reviews: Reviews;
}
export default function ReviewsList({reviews} : ReviewsProps) : JSX.Element {
  const halfLength = reviews.length / 2 + reviews.length % 2;
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, halfLength).map((review) => {
          const keyValue = review.id;
          return (<Review key={keyValue} text={review.comment} author={review.user} date={dateTimeConvert(review.date)} rating={review.rating}/>);
        })}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(halfLength,).map((review) => {
          const keyValue = review.id;
          return (<Review key={keyValue} text={review.comment} author={review.user} date={dateTimeConvert(review.date)} rating={review.rating}/>);
        })}
      </div>
    </div>
  );
}

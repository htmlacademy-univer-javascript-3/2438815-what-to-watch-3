import React, {FormEvent, useState} from 'react';
import RatingItemsList from '../rating/rating';
import {useAppDispatch} from '../../hooks';
import {postReview} from '../../store/api-actions';

export default AddReviewForm;

type AddReviewFormProps = {
  filmId: string;
}
function AddReviewForm({filmId} : AddReviewFormProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const currentDate = new Date().toDateString();
  const handleFieldChange = (evt:React.ChangeEvent<HTMLTextAreaElement>) => setReviewText(evt.target.value);
  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReview({id: filmId, comment: reviewText, rating: reviewRating, date: currentDate}));
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleOnSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <RatingItemsList setRating={setReviewRating}/>
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="text" id="review-text" placeholder="Review text" value={reviewText} onChange={handleFieldChange}>
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

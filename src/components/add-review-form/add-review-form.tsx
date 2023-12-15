import RatingItemsList from '../rating/rating';
import React, {useState} from 'react';
export default AddReviewForm;
function AddReviewForm() : JSX.Element {
  const [reviewText, setReviewText] = useState('');
  const handleFieldChange = (evt:React.ChangeEvent<HTMLTextAreaElement>) => setReviewText(evt.target.value);
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <RatingItemsList/>
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

import {RATING_END, RATING_START} from '../../consts/consts';

function generateRatingList(min: number, max: number): number[] {
  return [...Array.from(Array(max - min + 1).keys())].map((num) => num + min);
}

type RatingProps = {
  value : number;
  setRating : React.Dispatch<React.SetStateAction<number>>;
}
function RatingItem({value, setRating} : RatingProps) : JSX.Element {
  return(
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} onClick={() => setRating(value)}/>
      <label className="rating__label" htmlFor={`star-${value}`}>
        Rating {value}
      </label>
    </>
  );
}
type RatingItemsListProps = {
  setRating : React.Dispatch<React.SetStateAction<number>>;
}
function RatingItemsList({setRating} : RatingItemsListProps){
  const ratingList = generateRatingList(RATING_START, RATING_END);
  return (
    <>
      {ratingList.map((num) => (<RatingItem key={num} value={11 - num} setRating={setRating}/>))}
    </>
  );
}
export default RatingItemsList;

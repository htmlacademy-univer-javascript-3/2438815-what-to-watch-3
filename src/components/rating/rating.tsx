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
  const start = 1;
  const end = 10;
  const ratingList = generateRatingList(start, end);
  return (
    <>
      {ratingList.map((num) => (<RatingItem key={num} value={11 - num} setRating={setRating}/>))}
    </>
  );
}
export default RatingItemsList;

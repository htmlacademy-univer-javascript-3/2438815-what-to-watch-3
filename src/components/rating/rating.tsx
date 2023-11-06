function generateRatingList(min: number, max: number): number[] {
  return [...Array.from(Array(max - min + 1).keys())].map((num) => num + min);
}


type RatingProps = {
  value : number;
}
function RatingItem({value} : RatingProps) : JSX.Element {
  return(
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value}/>
      <label className="rating__label" htmlFor={`star-${value}`}>
        Rating {value}
      </label>
    </>
  );
}

function RatingItemsList(){
  const start = 1;
  const end = 10;
  const ratingList = generateRatingList(start, end);
  return (
    <>
      {ratingList.map((num) => (<RatingItem key={num} value={num}/>))}
    </>
  );
}
export default RatingItemsList;

import {RatingLabel, RatingLevel} from '../../consts/rating-level';


export function ratingLevelGenerate(ratingScore : number) : string {
  switch (true) {
    case RatingLevel.Bad <= ratingScore && ratingScore < RatingLevel.Normal:
      return (RatingLabel.Bad);
    case RatingLevel.Normal <= ratingScore && ratingScore < RatingLevel.Good:
      return (RatingLabel.Normal);
    case RatingLevel.Good <= ratingScore && ratingScore < RatingLevel.VeryGood:
      return (RatingLabel.Good);
    case RatingLevel.VeryGood <= ratingScore && ratingScore < RatingLevel.Awesome:
      return (RatingLabel.VeryGood);
    case RatingLevel.Awesome === ratingScore:
      return (RatingLabel.Awesome);
  }
  return '';
}

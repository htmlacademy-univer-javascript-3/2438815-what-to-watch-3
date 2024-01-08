import {processErrorHandle} from '../../api/process-error-handle';

export function ratingLevelGenerate(ratingScore : number) : string {
  switch (true) {
    case 0 <= ratingScore && ratingScore < 3:
      return ('Bad');
    case 3 <= ratingScore && ratingScore < 5:
      return ('Normal');
    case 5 <= ratingScore && ratingScore < 8:
      return ('Good');
    case 8 <= ratingScore && ratingScore < 10:
      return ('Very good');
    case 10 === ratingScore:
      return ('Awesome');
  }
  processErrorHandle('Rating is out the bounds of array 0-10');
  return '';
}

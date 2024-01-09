import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getMyFilms} from '../../../store/my-films-page-process/my-films-page-getter';
import { updateMyList} from '../../../store/api-actions';
import {HrefTypes, MyListButtonSVG} from './my-list-button-svg';


type MyListButtonProps = {
  id : string;
  isFavorite: boolean;
}
export function MyListButton({id, isFavorite} : MyListButtonProps) : JSX.Element{
  const dispatch = useAppDispatch();
  const myList = useAppSelector(getMyFilms);
  const hrefType = isFavorite ? HrefTypes.InList : HrefTypes.Add;

  const handleAuthoriseClick = () => {
    const isFavoriteNumber = isFavorite ? 0 : 1;
    dispatch(updateMyList({status: isFavoriteNumber, id}));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={() => handleAuthoriseClick()}>
      <MyListButtonSVG hrefType={hrefType}/>
      <span>
        My list
      </span>
      <span className="film-card__count">{myList.length}</span>
    </button>
  );
}


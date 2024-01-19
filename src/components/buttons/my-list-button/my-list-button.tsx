import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getMyFilms} from '../../../store/my-films-page-process/my-films-page-getter';
import { updateMyList} from '../../../store/api-actions';
import {HrefType, MyListButtonSVG} from './my-list-button-svg';
import {useNavigate} from 'react-router-dom';
import {APP_ROUTE} from '../../../consts/app-route';

type MyListButtonProps = {
  id : string;
}
export function MyListButton({id} : MyListButtonProps) : JSX.Element{
  const dispatch = useAppDispatch();
  const myList = useAppSelector(getMyFilms);
  const isFavorite = myList.find((film) => (film.id === id));
  const hrefType = isFavorite ? HrefType.InList : HrefType.Add;
  const navigate = useNavigate();
  const handleAuthoriseClick = () => {

    const isFavoriteNumber = isFavorite ? 0 : 1;
    dispatch(updateMyList({status: isFavoriteNumber, id}));
    navigate(APP_ROUTE.MY_LIST);
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


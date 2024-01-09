import {Link} from 'react-router-dom';
import {AppRoute} from '../../../consts/app-route';
import {useAppSelector} from '../../../hooks';
import {getMyFilms} from '../../../store/my-films-page-process/my-films-page-getter';
import {getAuthorizationStatus} from "../../../store/user-process/user-getters";
import {AuthorizationStatus} from "../../../consts/autorization-status";

export function MyListButton() : JSX.Element{
  const myListCount = useAppSelector(getMyFilms).length;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Auth){
    const is
  }



  return(
    <button className="btn btn--list film-card__button" type="button">
      <Link to={AppRoute.MyList}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      </Link>
      <span>
        My list
      </span>
      <span className="film-card__count">{myListCount}</span>
    </button>
  );
}

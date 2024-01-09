import {Link} from 'react-router-dom';
import {AppRoute} from '../../../consts/app-route';

type PlayButtonProps = {
  id : string;
}
export function PlayButton({id} : PlayButtonProps) : JSX.Element{
  return(
    <button className="btn btn--play film-card__button" type="button">
      <Link to={AppRoute.Player(id)}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
      </Link>
      <span>Play</span>
    </button>
  );
}

import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts/app-route';
import {useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';


export default UserBlock;

function UserBlock() : JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link" onClick={() => {
          dispatch(logoutAction());
        }} to={AppRoute.SignIn}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

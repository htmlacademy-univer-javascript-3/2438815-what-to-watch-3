import {AppRoute} from '../../consts/app-route';
import {AuthorizationStatus} from '../../consts/autorization-status';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
export default PrivateRoute;

type PrivateRouteProps = {
  children : JSX.Element;
}

function PrivateRoute({children} : PrivateRouteProps) : JSX.Element{
  return(
    useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
}

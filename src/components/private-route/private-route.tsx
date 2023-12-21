import {AppRoute} from '../../consts/app-route';
import {AuthorizationStatus} from '../../consts/autorization-status';
import {Navigate} from 'react-router-dom';
export default PrivateRoute;

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children : JSX.Element;
}

function PrivateRoute({authorizationStatus, children} : PrivateRouteProps) : JSX.Element{
  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
}

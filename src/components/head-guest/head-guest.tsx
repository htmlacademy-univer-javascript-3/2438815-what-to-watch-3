import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {APP_ROUTE} from '../../consts/app-route';

export function HeadGuest() : JSX.Element{
  return(
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-header.jpg"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <Logo logoClassName={'logo__link'}/>

        <div className="user-block">
          <Link className="user-block__link" to={APP_ROUTE.SIGN_IN}>
            Sign in
          </Link>
        </div>
      </header>

    </section>
  );
}

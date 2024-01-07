import {FormEvent, useRef} from 'react';
import Logo from '../../logo/logo';
import Footer from '../../footer/footer';
import {AuthData} from '../../../types/auth-data-type';
import {useAppDispatch} from '../../../hooks';
import {loginAction} from '../../../store/api-actions';
export default SignInPage;
function SignInPage() : JSX.Element{
  const dispatch = useAppDispatch();
  const inputRef = useRef<AuthData>({login : '', password : ''});
  const handleSubmit = (evt : FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (inputRef.current.login !== '' && inputRef.current.password !== ''){
      dispatch(loginAction({login : inputRef.current.login, password : inputRef.current.password}));
    }
  };
  return (
    <body>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo logoClassName="logo__link"/>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="sign-in-pages-directory/sign-in#" className="sign-in__form" ref={inputRef} onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    </body>
  );
}

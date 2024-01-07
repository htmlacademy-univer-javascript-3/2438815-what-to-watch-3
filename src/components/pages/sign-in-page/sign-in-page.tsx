import {FormEvent, useRef} from 'react';
import Logo from '../../logo/logo';
import Footer from '../../footer/footer';
import {useAppDispatch} from '../../../hooks';
import {loginAction} from '../../../store/api-actions';

export default SignInPage;
function SignInPage() : JSX.Element{
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (evt : FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (inputRef.current) {
      const email = new FormData(inputRef.current).get('user-email');
      const password = new FormData(inputRef.current).get('user-password');
      if (email && password){
        dispatch(loginAction({email: email.toString(), password: password.toString()}));
      }
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo logoClassName="logo__link" isNotActive/>
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
      <Footer isLogoNotActive/>
    </div>
  );
}

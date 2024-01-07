import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './app/app';
import {promoFilmSettings} from './consts/promo-film-settings';
import {reviews} from './mocks/review';
import {store} from './store/index';
import Error from './components/error/error';
import {checkAuthAction, fetchFilmsAction, fetchPromoFilmAction} from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error />
      <App {...promoFilmSettings} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);

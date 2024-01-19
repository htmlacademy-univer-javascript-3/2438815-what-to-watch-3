import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './app/app';
import {store} from './store/store';
import {checkAuthAction, fetchFilmsAction, fetchMyFilmsAction, fetchPromoFilmAction} from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchMyFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './app/app';
import {promoFilmSettings} from './consts/promo-film-settings';
import {films} from './mocks/film';
import {video} from './mocks/video';
import {reviews} from './mocks/review';
import {store} from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App {...promoFilmSettings} films = {films} video={video} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);

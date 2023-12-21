import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import {promoFilmSettings} from './consts';
import {films} from './mocks/film';
import {video} from './mocks/video';
import {reviews} from './mocks/review';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App {...promoFilmSettings} films = {films} video={video} reviews={reviews}/>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PromoFilmSettings = {
  promoFilmTitle : 'The Grand Budapest Hotel',
  promoFilmGenre : 'Drama',
  promoFilmYear : 2014,
} as const;


root.render(
  <React.StrictMode>
    <App {...PromoFilmSettings} />
  </React.StrictMode>
);

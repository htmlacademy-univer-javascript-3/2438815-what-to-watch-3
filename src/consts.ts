export const promoFilmSettings = {
  promoFilmTitle : 'The Grand Budapest Hotel',
  promoFilmGenre : 'Drama',
  promoFilmYear : 2014,
};
export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN'
}

export enum genres {
  Comedy = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thrillers'
}

export enum ratings {
  One = 'Terrible',
  Two = 'Very very Bad',
  Three = 'Very Bad',
  Four = 'Bad',
  Five = 'Near normal',
  Six = 'Normal',
  Seven = 'Good',
  Eight = 'Very good',
  Nine = 'Very very good',
  Ten = 'Brilliant'
}

export const bgData = {
  imgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
  imgAlt: 'The Grand Budapest Hotel'
};
export const posterData = {
  imgSrc: 'img/bg-the-grand-budapest-hotel-poster.jpg',
  imgAlt: 'The Grand Budapest Hotel poster'
};

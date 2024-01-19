import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {
  redirectToRoute
} from './redirect-action/redirect-action';
import {
  loadFilm,
  loadSimilarFilms,
  loadReviews,
} from './film-page-process/film-page-process';
import {
  loadFilms,
  loadPromoFilm
} from './main-page-process/main-page-process';
import {loadMyFilms} from './my-films-page-process/my-films-page-process';
import {Film, Films, PromoFilm} from '../types/film-type';
import {API_ROUTE} from '../consts/api-route';
import {AuthData} from '../types/auth-data-type';
import {User} from '../types/user-type';
import {dropToken, saveToken} from '../api/token';
import {APP_ROUTE} from '../consts/app-route';
import {Reviews, ReviewSendData} from '../types/review-type';
import {setLoadingStatus} from './system-process/system-process';
import {UpdateMyListData} from '../types/update-my-list-data';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<Films>(API_ROUTE.FILMS);
      dispatch(loadFilms(data));
    } finally{
      dispatch(setLoadingStatus(false));
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoFilm>(API_ROUTE.PROMO);
    dispatch(loadPromoFilm(data));
  },
);

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    try {
      const {data} = await api.get<Film>(API_ROUTE.FILM(id));
      dispatch(loadFilm(data));
      dispatch(setLoadingStatus(false));
    } catch {
      dispatch(redirectToRoute(APP_ROUTE.NOT_FOUND_PAGE));
      dispatch(setLoadingStatus(false));
    }
  }
);
export const fetchSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(API_ROUTE.SIMILAR(id));
    dispatch(loadSimilarFilms(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(API_ROUTE.COMMENTS(id));
    dispatch(loadReviews(data));
  },
);

export const postReview = createAsyncThunk<void, ReviewSendData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async ({id,comment, rating}, {dispatch, extra: api}) => {
    await api.post(API_ROUTE.COMMENTS(id), {comment, rating});
    dispatch(fetchReviewsAction(id));
    dispatch(redirectToRoute('/back'));
  },
);
export const fetchMyFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(API_ROUTE.FAVORITE);
    dispatch(loadMyFilms(data));
  },
);

export const updateMyList = createAsyncThunk<void, UpdateMyListData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/UpdateMyList',
  async ({id, status}, {dispatch, extra: api}) => {
    await api.post(API_ROUTE.CHANGE_FAVORITE_STATUS(id, status));
    dispatch(fetchMyFilmsAction());
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    await api.get(API_ROUTE.CHECK_LOGIN);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(API_ROUTE.LOGIN, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(APP_ROUTE.MAIN));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(API_ROUTE.LOGOUT);
    dropToken();
  },
);

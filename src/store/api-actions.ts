import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {
  redirectToRoute
} from './redirect-action/redirect-action';
import {
  loadFilm,
  loadSimilarFilms,
  loadReviews
} from './film-page-process/film-page-process';
import {
  loadFilms,
  loadPromoFilm
} from './main-page-process/main-page-process';
import {loadMyFilms} from './my-films-page-process/my-films-page-process';
import {Film, Films, PromoFilm} from '../types/film-type';
import {APIRoute} from '../consts/api-route';
import {AuthData} from '../types/auth-data-type';
import {User} from '../types/user-type';
import {dropToken, saveToken} from '../api/token';
import {AppRoute} from '../consts/app-route';
import {Reviews, ReviewSendData} from '../types/review-type';
import {setLoadingStatus} from './system-process/system-process';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<Films>(APIRoute.Films);
      dispatch(loadFilms(data));
    } finally{
      dispatch(setLoadingStatus(false));
    }
  },
);

export const fetchMyFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorite);
    dispatch(loadMyFilms(data));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoFilm>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
  },
);

export const fetchFilm = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(APIRoute.Film(id));
      dispatch(loadFilm(data));
      dispatch(redirectToRoute(AppRoute.Film(id)));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFoundPage));
    }
  }
);
export const fetchSimilarFilms = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Similar(id));
    dispatch(loadSimilarFilms(data));
  },
);
export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(APIRoute.Comments(id));
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
    await api.post(APIRoute.Comments(id), {comment, rating});
    dispatch(fetchReviews(id));
    dispatch(redirectToRoute('/back'));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    await api.get(APIRoute.CheckLogin);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

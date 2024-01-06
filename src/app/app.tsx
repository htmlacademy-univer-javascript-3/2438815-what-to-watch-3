import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AuthorizationStatus} from '../consts/autorization-status';
import {AppRoute} from '../consts/app-route';
import MainPage from '../components/pages/main-page/main-page';
import SignInPage from '../components/pages/sign-in-directory/sign-in-page/sign-in-page';
import MyListPage from '../components/pages/my-list-page/my-list-page';
import AddReviewPage from '../components/pages/add-review-page/add-review-page';
import PlayerPage from '../components/pages/player-directory/player-page/player-page';
import NotFoundPage from '../components/pages/not-found-page/not-found-page';
import PrivateRoute from '../components/private-route/private-route';
import FilmPage from '../components/pages/film-page/film-page';
import {Reviews} from '../types/review-type';
import {useAppSelector} from '../hooks';
import {LoadingPage} from '../components/pages/loading-page/loading-page';

export default App;

type AppProps = {
  reviews: Reviews;
}
function App({reviews} : AppProps) : JSX.Element {
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);
  if (isFilmsDataLoading) {
    return (
      <LoadingPage />
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInPage/>}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyListPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmPage reviews={reviews}/>}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReviewPage/>}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerPage/>}
          />
          <Route
            path='*'
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

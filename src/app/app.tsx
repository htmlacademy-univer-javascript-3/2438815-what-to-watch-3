import {Route, Routes} from 'react-router-dom';
import {AuthorizationStatus} from '../consts/autorization-status';
import {AppRoute} from '../consts/app-route';
import MainPage from '../components/pages/main-page/main-page';
import SignInPage from '../components/pages/sign-in-page/sign-in-page';
import MyListPage from '../components/pages/my-list-page/my-list-page';
import AddReviewPage from '../components/pages/add-review-page/add-review-page';
import PlayerPage from '../components/pages/player-directory/player-page/player-page';
import NotFoundPage from '../components/pages/not-found-page/not-found-page';
import PrivateRoute from '../components/private-route/private-route';
import FilmPage from '../components/pages/film-page/film-page';
import {useAppSelector} from '../hooks';
import {LoadingPage} from '../components/pages/loading-page/loading-page';
import browserHistory from '../history-route/browser-history';
import HistoryRouter from '../history-route/history-route';
import {getAuthorizationStatus} from '../store/user-process/user-getters';
import {getIsDataLoading} from '../store/system-process/system-getters';

export default App;

function App() : JSX.Element {
  const isFilmsDataLoading = useAppSelector(getIsDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsDataLoading) {
    return (
      <LoadingPage />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
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
            <PrivateRoute>
              <MyListPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film()}
          element={<FilmPage/>}
        />
        <Route
          path={AppRoute.AddReview()}
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
    </HistoryRouter>
  );
}

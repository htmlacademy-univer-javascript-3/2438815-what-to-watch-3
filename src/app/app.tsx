import {Route, Routes} from 'react-router-dom';
import {AuthorizationStatus} from '../consts/autorization-status';
import {APP_ROUTE} from '../consts/app-route';
import MainPage from '../components/pages/main-page/main-page';
import SignInPage from '../components/pages/sign-in-page/sign-in-page';
import MyListPage from '../components/pages/my-list-page/my-list-page';
import AddReviewPage from '../components/pages/add-review-page/add-review-page';
import PlayerPage from '../components/pages/player-page/player-page';
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
          path={APP_ROUTE.MAIN}
          element={<MainPage/>}
        />
        <Route
          path={APP_ROUTE.SIGN_IN}
          element={<SignInPage/>}
        />
        <Route
          path={APP_ROUTE.MY_LIST}
          element={
            <PrivateRoute>
              <MyListPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={APP_ROUTE.FILM()}
          element={<FilmPage/>}
        />
        <Route
          path={APP_ROUTE.ADD_REVIEW()}
          element={<AddReviewPage/>}
        />
        <Route
          path={APP_ROUTE.PLAYER()}
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

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../consts';
import MainPage from '../components/pages/main-page/main-page';
import SignInPage from '../components/pages/sign-in-directory/sign-in-page/sign-in-page';
import MyListPage from '../components/pages/my-list-page/my-list-page';
import AddReviewPage from '../components/pages/add-review-page/add-review-page';
import PlayerPage from '../components/pages/player-directory/player-page/player-page';
import NotFoundPage from '../components/pages/not-found-page/not-found-page';
import PrivateRoute from '../components/private-route/private-route';
import {Films} from '../types/film-type';
import {VideoType} from '../types/video-type';
import FilmPage from '../components/pages/film-page/film-page';

export default App;

type AppProps = {
  promoFilmTitle : string;
  promoFilmGenre : string;
  promoFilmYear : number;
  films: Films;
  video: VideoType;
}
function App(props : AppProps) : JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage {...props}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage/>}
        />
        <Route
          path={AppRoute.MyList}
          element = {
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage films={{...props}.films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage films={{...props}.films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage video={{...props}.video}/>}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

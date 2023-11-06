import MainPage from '../pages/main-page/main-page';
export default App;


type AppProps = {
  promoFilmTitle : string;
  promoFilmGenre : string;
  promoFilmYear : number;
}
function App(props : AppProps) : JSX.Element {
  return (
    <MainPage {...props}/>
  );
}

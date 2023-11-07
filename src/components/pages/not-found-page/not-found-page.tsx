import { Link } from 'react-router-dom';
export default NotFoundPage;
function NotFoundPage() : JSX.Element{
  return(
    <body>
      <h1 >
        Page is not found.
      </h1>
      <Link to="/">Вернуться на главную</Link>
    </body>
  );
}

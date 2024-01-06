import { Link } from 'react-router-dom';
import './not-found-page.css';
export default NotFoundPage;
function NotFoundPage() : JSX.Element{
  return(
    <div className="body-element">
      <h1>404 Error Page Not Found</h1>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <h1><Link to="/">Back to catalog</Link></h1>
    </div>
  );
}



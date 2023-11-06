import Logo from '../logo/logo';

export default Footer;

function Footer() : JSX.Element {
  return (
    <footer className="page-footer">
      <Logo logoClassName="logo__link logo__link--light"/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

import Logo from '../logo/logo';

export default Footer;

type FooterProps = {
  isLogoNotActive? : boolean;
}
function Footer({isLogoNotActive} : FooterProps) : JSX.Element {
  return (
    <footer className="page-footer">
      <Logo logoClassName="logo__link logo__link--light" isNotActive={isLogoNotActive}/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

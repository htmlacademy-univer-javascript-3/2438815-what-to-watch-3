export default Logo;
type LogoProps = {
  logoClassName : string;
}
function Logo({logoClassName} : LogoProps) : JSX.Element {
  return (
    <div className="logo">
      <a href="main.html" className={logoClassName}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

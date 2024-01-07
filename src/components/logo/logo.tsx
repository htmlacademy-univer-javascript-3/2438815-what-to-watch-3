import {Link} from 'react-router-dom';
export default Logo;

type LogoProps = {
  logoClassName : string;
  isNotActive? : boolean;
}
function Logo({logoClassName, isNotActive} : LogoProps) : JSX.Element {
  if (!isNotActive){
    return (
      <div className="logo">
        <Link className={logoClassName} to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>);
  }
  return(
    <div className="logo">
      <div className={logoClassName}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </div>
    </div>);
}

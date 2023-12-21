
type TabNavElementProps = {
  label: string;
  className: string;
  setActiveLabel: React.Dispatch<React.SetStateAction<string>>;
}
function TabNavElement({label, className, setActiveLabel}:TabNavElementProps) : JSX.Element {
  const handlerClick = () => {
    setActiveLabel(label);
  };
  return (
    <li className={className} onClick={handlerClick}>
      <nav className="film-nav__link">{label}</nav>
    </li>
  );
}
export default TabNavElement;

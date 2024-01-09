export default ShowMoreButton;
type ShowMoreButtonProps = {
  onClickProp: () => void;
}
function ShowMoreButton({onClickProp} : ShowMoreButtonProps) : JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => {
        onClickProp();
      }}
      >
        Show more
      </button>
    </div>
  );
}

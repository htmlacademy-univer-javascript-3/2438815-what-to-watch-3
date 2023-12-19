export default FilmCardImg;

type FilmCardImgProps = {
  imgSrc: string;
  imgAlt: string;
  width?: number;
  height?: number;
  className: string;

}

function FilmCardImg({imgSrc, imgAlt, width, height, className} : FilmCardImgProps) : JSX.Element {
  return (
    <div className={className}>
      <img src={imgSrc}
        alt={imgAlt}
        width={width}
        height={height}
      />
    </div>
  );
}

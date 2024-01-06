export default FilmCardImg;

type FilmCardImgProps = {
  img?: string;
  alt?: string;
  width?: number;
  height?: number;
  className: string;

}

function FilmCardImg({img, alt, width, height, className} : FilmCardImgProps) : JSX.Element {
  return (
    <div className={className}>
      <img src={img}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
}

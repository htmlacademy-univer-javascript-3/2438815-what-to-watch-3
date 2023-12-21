import {ImgType} from '../../types/img-type';

export default FilmCardImg;

type FilmCardImgProps = {
  img: ImgType;
  width?: number;
  height?: number;
  className: string;

}

function FilmCardImg({img, width, height, className} : FilmCardImgProps) : JSX.Element {
  return (
    <div className={className}>
      <img src={img.src}
        alt={img.alt}
        width={width}
        height={height}
      />
    </div>
  );
}

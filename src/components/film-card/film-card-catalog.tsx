import React from 'react';
import {Link} from 'react-router-dom';
import {ImgDataType} from '../../types/img-data-type';
import {AppRoute} from '../../consts';
export default FilmCardCatalog;

type FilmCardCatalogProps = {
  filmId: number;
  filmTitle: string;
  imgData: ImgDataType;
  setId: React.Dispatch<React.SetStateAction<number | null | undefined>>;
}

function FilmCardCatalog({filmId, filmTitle, imgData, setId} : FilmCardCatalogProps) : JSX.Element {
  const handleMouseEnter = () => {
    setId(filmId);
  };
  const handleMouseLeave = () => {
    setId(null);
  };
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        <img
          src={imgData.imgSrc}
          alt={imgData.imgAlt}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>
          {filmTitle}
        </Link>
      </h3>
    </article>
  );
}

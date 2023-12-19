import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import FilmCardImg from './film-card';
export default FilmCardCatalog;

type FilmCardCatalogProps = {
  filmId: number;
  filmTitle: string;
  imgSrc: string;
  imgAlt: string;
  setId: React.Dispatch<React.SetStateAction<number | null | undefined>>;
}

function FilmCardCatalog({filmId, filmTitle, imgSrc, imgAlt, setId} : FilmCardCatalogProps) : JSX.Element {
  const handleMouseEnter = () => {
    setId(filmId);
  };
  const handleMouseLeave = () => {
    setId(null);
  };
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <FilmCardImg imgSrc={imgSrc} imgAlt={imgAlt} className={'small-film-card__image'} width={280} height={175}></FilmCardImg>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>
          {filmTitle}
        </Link>
      </h3>
    </article>
  );
}

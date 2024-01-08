import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts/app-route';
import VideoPlayer from '../videoplayer/videoplayer';
import {CatalogFilm} from '../../types/film-type';
export default FilmCardCatalog;

type FilmCardCatalogProps = {
  film: CatalogFilm;
  setId: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

function FilmCardCatalog({film, setId} : FilmCardCatalogProps) : JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const filmId = film.id;
  const handleMouseEnter = () => {
    setId(filmId);
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setId(null);
    setIsHovered(false);
  };
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <VideoPlayer
        videoLink={film.previewVideoLink}
        poster={film.previewImage}
        width={280}
        height={175}
        isHovered={isHovered}
        muted
      />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film(filmId)}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

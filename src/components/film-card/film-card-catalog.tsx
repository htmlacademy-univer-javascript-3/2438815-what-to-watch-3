import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts/app-route';
import VideoPlayer from '../videoplayer/videoplayer';
import {VideoType} from '../../types/video-type';
export default FilmCardCatalog;

type FilmCardCatalogProps = {
  filmId: number;
  filmTitle: string;
  video: VideoType;
  setId: React.Dispatch<React.SetStateAction<number | null | undefined>>;
}

function FilmCardCatalog({filmId, video, filmTitle, setId} : FilmCardCatalogProps) : JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);
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
        video={video}
        width={280}
        height={175}
        isHovered={isHovered}
        muted
      />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace('id', `${filmId}`)}>
          {filmTitle}
        </Link>
      </h3>
    </article>
  );
}

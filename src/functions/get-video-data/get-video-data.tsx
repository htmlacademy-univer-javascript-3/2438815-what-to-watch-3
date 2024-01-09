import {VideoData} from '../../types/video-data-type';
import {Film} from '../../types/film-type';

export function GetVideoData(film : Film | undefined) : VideoData | null {
  if (!film || !film?.videoLink || !film.posterImage) {
    return null;
  }
  return ({src: film.videoLink, poster: film.backgroundImage});
}

import {genres} from '../consts';
import {VideoType} from './video-type';
import {RatingType} from './rating-type';
import {ImgType} from './img-type';

export type FilmType = {
  id: number;
  title: string;
  genre: genres[];
  releaseYear: number;
  rating: RatingType;
  description: string;
  director: string;
  starring: string[];
  runTime: string;
  video: VideoType;
  poster: ImgType;
  bg: ImgType;
}

export type Films = FilmType[];

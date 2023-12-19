import {genres} from '../consts';
import {VideoType} from './video-type';

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
}

export type RatingType = {
  score: number;
  level: string;
  count: number;
}

export type Films = FilmType[];

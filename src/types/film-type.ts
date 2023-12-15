import {genres} from '../consts';

export type FilmType = {
  id: number;
  title: string;
  genre: genres[];
  releaseYear: number;
  posterImgSrc: string;
  posterImgAlt: string;
  rating: RatingType;
  description: string;
  director: string;
  starring: string[];
  runTime: string;
  movieAddress: string;
}

export type RatingType = {
  score: number;
  level: string;
  count: number;
}

export type Films = FilmType[];

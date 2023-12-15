import FilmCardCatalog from '../film-card/film-card-catalog';
import {Films} from '../../types/film-type';
import {useState} from 'react';

type FilmsListProps = {
  films: Films;
}
export default function FilmsList({films} : FilmsListProps) : JSX.Element {
  const [, setSelectedCardId] = useState<number| null | undefined>();
  return(
    <div className="catalog__films-list">
      {films.map((filmsElement) => {
        const keyValue = filmsElement.id;
        const imgData = {imgSrc:filmsElement.posterImgSrc, imgAlt:filmsElement.title};
        return (<FilmCardCatalog key={keyValue} filmId={keyValue} filmTitle={filmsElement.title} imgData={imgData} setId = {setSelectedCardId}/>);
      })}
    </div>
  );
}

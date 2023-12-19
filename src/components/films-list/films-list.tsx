import {useState} from 'react';
import FilmCardCatalog from '../film-card/film-card-catalog';
import {Films} from '../../types/film-type';

type FilmsListProps = {
  films: Films;
}
export default function FilmsList({films} : FilmsListProps) : JSX.Element {
  const [, setSelectedCardId] = useState<number| null | undefined>();
  return(
    <div className="catalog__films-list">
      {films.map((filmsElement) => {
        const keyValue = filmsElement.id;
        return (<FilmCardCatalog key={keyValue} filmId={keyValue} filmTitle={filmsElement.title} video={filmsElement.video} setId = {setSelectedCardId}/>);
      })}
    </div>
  );
}

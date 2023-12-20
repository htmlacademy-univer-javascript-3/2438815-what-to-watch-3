import {useState} from 'react';
import FilmCardCatalog from '../film-card/film-card-catalog';
import {Films} from '../../types/film-type';

type FilmsListProps = {
  films: Films;
  filmsCount?: number;
}
export default function FilmsList({films, filmsCount} : FilmsListProps) : JSX.Element {
  const [, setSelectedCardId] = useState<number| null | undefined>();
  const catalog = typeof filmsCount === 'undefined' ? films : films.slice(0, filmsCount);
  return(
    <div className="catalog__films-list">
      {catalog.map((filmsElement) => {
        const keyValue = filmsElement.id;
        return (<FilmCardCatalog key={keyValue} filmId={keyValue} filmTitle={filmsElement.title} video={filmsElement.video} setId = {setSelectedCardId}/>);
      })}
    </div>
  );
}

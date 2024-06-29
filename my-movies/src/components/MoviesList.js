import { MoviesContainer } from "../style/MoviesContainer";
import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
  <MoviesContainer>
    <ul>
      {movies.map(m => 
        <MovieItem id={m.id} title={m.title} />
      )}
    </ul>
  </MoviesContainer>
);

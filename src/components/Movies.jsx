import React, { useContext } from "react";
import "./movies.css";
import MovieCard from "./MovieCard";
import { MovieContext } from "../MovieContext";

function Movies() {
  const [movies] = useContext(MovieContext);
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;

import React from "react";
import "./movieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <h4>Title : {movie.name}</h4>
      <p>Price : {movie.price}</p>
      <p>id : {movie.id} </p>
    </div>
  );
};

export default MovieCard;

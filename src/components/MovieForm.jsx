import React, { useContext, useState } from "react";
import { MovieContext } from "../MovieContext";
import "./movieForm.css";

function MovieForm() {
  const [movies, setMovies] = useContext(MovieContext);
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newId = movies[movies.length - 1].id + 1;
    setMovies(previousMovies => [
      { name: name, price: price, id: newId },
      ...previousMovies
    ]);
    setName("");
    setPrice("");
  };

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };
  return (
    <form className="form form-inline" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        onChange={updateName}
        name="name"
        value={name}
        className="form-control mb-2 mr-sm-2"
      />
      <input
        type="text"
        placeholder="Price"
        onChange={updatePrice}
        name="price"
        value={price}
        className="form-control mb-2 mr-sm-2"
      />
      <input type="submit" className="btn btn-primary mb-2" />
    </form>
  );
}

export default MovieForm;

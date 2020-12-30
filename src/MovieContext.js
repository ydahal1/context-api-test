import React, { useState, createContext } from "react";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";

export const MovieContext = createContext();

export const MovieProvider = () => {
  const [movies, setMovies] = useState([
    {
      name: "Harry potter",
      price: 10,
      id: 1
    },
    {
      name: "Lesson Before Dying",
      price: 23,
      id: 2
    },
    {
      name: "Drama Queen",
      price: 29,
      id: 3
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      <Nav />
      <Movies />
      <MovieForm />
    </MovieContext.Provider>
  );
};

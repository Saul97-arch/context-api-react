import React, { useState, createContext } from "react";

// Whenever I'm want to use the context I'm gona use this
export const MovieContext = createContext();

// The provider is going to provide, duh
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Putther",
      price: "10$",
      id: 20021,
    },
    {
      name: "Black Pantar",
      price: "22$",
      id: 23234,
    },
    {
      name: "Inception",
      price: "13$",
      id: 43432,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};

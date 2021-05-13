import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieListContext";
export const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    //setMovies([...movies, {name: name, price: price}])
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "30%" }}
      onSubmit={addMovie}
    >
      <input type="text" value={name} onChange={updateName} />
      <input type="text" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;

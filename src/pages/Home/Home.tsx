import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { Hero, PopularMovies } from "./components";
const Home = () => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch(api.endpoints.getPopularMovies)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data.results);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      <div>
        <h2>Homepage</h2>
        <Hero />
        <PopularMovies />
      </div>
    </>
  );
};

export default Home;

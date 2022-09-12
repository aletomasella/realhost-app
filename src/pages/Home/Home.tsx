import React from "react";
import { Hero, PopularMovies } from "./components";
const Home = () => {
  return (
    <>
      <div className="bg-gray-700">
        <Hero />
        <PopularMovies />
      </div>
    </>
  );
};

export default Home;

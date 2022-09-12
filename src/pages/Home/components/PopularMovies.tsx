import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Movie } from "../../../models";
import { getMoviesList } from "../../../redux/feature/movieSlice";

const PopularMovies = () => {
  const movies = useSelector((state: { movies: Movie[] }) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesList());
  }, []);
  return (
    <>
      <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
        <h1 className="text-white text-2xl mt-8 mb-5">Most popular movies</h1>
        {movies && JSON.stringify(movies)}
      </div>
    </>
  );
};

export default PopularMovies;

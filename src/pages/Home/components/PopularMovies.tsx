// @ts-nocheck

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Movie } from "../../../models";
import { getMoviesList } from "../../../redux/feature/movieSlice";
import Pagination from "./Pagination";
import PopularMovieCard from "./PopularMovieCard";

const PopularMovies = () => {
  const [page, setPage] = useState(1);
  const moviesRedux = useSelector((state: any) => state.movies);
  const results: Movie[] = moviesRedux.moviesList.results;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesList(page));
  }, [page]);
  return (
    <>
      <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
        <Pagination page={page} setPage={setPage} />
        <h1 className="text-white text-2xl mt-8 mb-5">Most popular movies</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {results &&
            results.map((movie: Movie) => (
              <PopularMovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularMovies;

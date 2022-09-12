import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../../models";

const PopularMovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <>
      <Link to={`/details/${movie.id}`}>
        <div className="bg-white shadow-sm rounded-md cursor-pointer h-full">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={500}
            height={500}
            className="rounded-t-md"
            alt={movie.title}
          />
          <div className="px-6 py-2">
            <div className="font-bold text-xl mb-1">{movie.title}</div>
            <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PopularMovieCard;

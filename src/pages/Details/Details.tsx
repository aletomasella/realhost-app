// @ts-nocheck

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Movie } from "../../models";
import { getMovie } from "../../redux/feature/movieSlice";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moviesRedux = useSelector((state: any) => state.movies);
  const movieDetails: Movie = moviesRedux.movie;

  useEffect(() => {
    dispatch(getMovie(`${id}`));
  }, [id]);
  return (
    <>
      {movieDetails.title && (
        <div className="container max-w-4xl mx-auto pt-6">
          <div className="px-3">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
              alt={movieDetails.title}
              width={1000}
              height={600}
              className="rounded-md"
            />
            <h1 className="font-bold text-2xl my-2">{movieDetails.title}</h1>
            <p className="text-gray-600 text-sm mt-4">
              {movieDetails.overview}
            </p>
            <p className="mt-5 text-gray-600 text-sm">
              Genres :{" "}
              <span className="font-bold">
                {movieDetails.genres.map((genre) => genre.name).join(", ")}
              </span>
            </p>
            <p className="text-gray-600 text-sm">
              Release Date :{" "}
              <span className="font-bold">{movieDetails.release_date}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;

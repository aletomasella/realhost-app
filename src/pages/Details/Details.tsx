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
  const movieDetails: Movie = moviesRedux.movie.results;

  useEffect(() => {
    dispatch(getMovie(`${id}`));
  }, []);
  return (
    <>
      <div>Details</div>
    </>
  );
};

export default Details;
